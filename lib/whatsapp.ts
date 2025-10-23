import twilio from "twilio";
export async function sendWhatsApp(to: string, text: string){
  const sid = process.env.TWILIO_ACCOUNT_SID!;
  const token = process.env.TWILIO_AUTH_TOKEN!;
  const from = process.env.TWILIO_WHATSAPP_FROM!;
  const client = twilio(sid, token);
  const toNum = to.startsWith("whatsapp:") ? to : `whatsapp:${to}`;
  await client.messages.create({ from, to: toNum, body: text });
}
