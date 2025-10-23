// lib/notifyOwner.ts
import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID!, process.env.TWILIO_TOKEN!);

export async function notifyOwner(order: any) {
  const message = `
🛒 New Order Received!
Order ID: ${order.id}
Total: $${(order.totalCents / 100).toFixed(2)}
Delivery: ${order.deliveryType}
Notes: ${order.notes || "—"}
Placed at: ${new Date(order.createdAt).toLocaleString()}
`;

  await client.messages.create({
    from: "whatsapp:+14155238886", // Twilio sandbox
    to: "whatsapp:+15105906701",  // Your number
    body: message,
  });
}
