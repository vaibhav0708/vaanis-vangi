import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { sendWhatsApp } from "@/lib/whatsapp";

export const runtime = "nodejs";

export async function POST(req: Request){
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") || "";
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (e:any) {
    return new Response(`Webhook Error: ${e.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed"){
    const s = event.data.object as Stripe.Checkout.Session;
    const order = await prisma.order.update({ where: { stripeSession: s.id }, data: { status: "PAID", totalCents: s.amount_total ?? 0 } });

    if (order.whatsappTo) {
      await sendWhatsApp(order.whatsappTo, `✅ Order confirmed!\nOrder #${order.id}\nTotal: $${(order.totalCents/100).toFixed(2)}\nWhen: ${order.whenDate.toDateString()}\nThank you for ordering with Vani's Vangi! 🍽️`);
    }

    // simple co-purchase update from saved line items would be here (skipped in minimal zip)
  }
  return new Response("ok");
}

export async function GET(){ return new Response("OK"); }
