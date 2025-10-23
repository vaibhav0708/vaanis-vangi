import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request){
  const { items, deliveryType, whenDate, addressText, notes, whatsappTo, rewardToUse = 0 } = await req.json();

  const productIds = items.map((i:any)=>i.productId);
  const dbProducts = await prisma.product.findMany({ where: { id: { in: productIds } } });
  const lineItems = items.map((i:any)=> {
    const p = dbProducts.find(d=>d.id===i.productId)!;
    return { price_data:{ currency:"usd", product_data:{ name:p.name }, unit_amount:p.priceCents }, quantity:i.quantity };
  });

  const subtotal = dbProducts.reduce((sum,p:any)=> {
    const qty = items.find((i:any)=>i.productId===p.id).quantity;
    return sum + p.priceCents * qty;
  },0);
  const discount = Math.min(rewardToUse * 50, subtotal); // 1 point = $0.50
  const rewardEarned = Math.floor(subtotal/1000);

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const checkout = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems as any,
    success_url: `${process.env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.APP_URL}/cart`,
    metadata: { whenDate, deliveryType, whatsappTo, rewardToUse: String(rewardToUse) }
  });

  await prisma.order.create({
    data:{
      status: "PENDING",
      subtotalCents: subtotal,
      discountCents: discount,
      totalCents: subtotal - discount,
      whenDate: new Date(whenDate),
      deliveryType, addressText, notes,
      stripeSession: checkout.id,
      whatsappTo,
      rewardUsed: rewardToUse, rewardEarned
    }
  });

  return Response.json({ url: checkout.url });
}
