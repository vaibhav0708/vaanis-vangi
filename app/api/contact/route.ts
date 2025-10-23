// app/api/contact/route.ts
import { NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID!, process.env.TWILIO_TOKEN!);

export async function POST(req: Request) {
  const { name, phone, message } = await req.json();

  // Notify Owner
  await client.messages.create({
    from: "whatsapp:+14155238886",
    to: "whatsapp:+15105906701",
    body: `📩 Message from ${name} (${phone}): ${message}`,
  });

  // Auto reply to user
  await client.messages.create({
    from: "whatsapp:+14155238886",
    to: `whatsapp:${phone}`,
    body: `Hey ${name}! 👋 Thanks for contacting *Vaani’s Vangi*. We'll get back to you soon 💛`,
  });

  return NextResponse.json({ success: true });
}
