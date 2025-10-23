"use client";
import { useState } from "react";
export default function CloudinaryUploader({ onUploaded }:{ onUploaded:(url:string)=>void }){
  const [busy,setBusy] = useState(false);
  async function upload(file: File){
    setBusy(true);
    const sign = await fetch("/api/cloudinary/sign").then(r=>r.json());
    const form = new FormData();
    form.append("file", file);
    form.append("timestamp", sign.timestamp);
    form.append("api_key", sign.apiKey);
    form.append("signature", sign.signature);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${sign.cloudName}/image/upload`, { method:"POST", body: form });
    const data = await res.json();
    onUploaded(data.secure_url);
    setBusy(false);
  }
  return <input disabled={busy} type="file" accept="image/*" onChange={(e)=> e.target.files && upload(e.target.files[0]) } />;
}
