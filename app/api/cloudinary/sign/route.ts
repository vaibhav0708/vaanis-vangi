import crypto from "crypto";
export async function GET(){
  const ts = Math.round(Date.now()/1000);
  const secret = process.env.CLOUDINARY_API_SECRET!;
  const signature = crypto.createHash("sha1").update(`timestamp=${ts}${secret}`).digest("hex");
  return Response.json({ timestamp: ts, apiKey: process.env.CLOUDINARY_API_KEY, cloudName: process.env.CLOUDINARY_CLOUD_NAME, signature });
}
