// app/api/orders/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyOwner } from "@/lib/notifyOwner";

type OrderPayload = {
  userId?: string | null;
  subtotalCents: number;
  totalCents: number;
  deliveryType: "delivery" | "pickup";
  whenDate: string;                 // ISO string from <input type="datetime-local">
  addressText?: string | null;
  notes?: string | null;
  rewardUsed?: number;

  // guest snapshot
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as OrderPayload;

    // basic validation (min 15 days)
    const min = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);
    const when = new Date(body.whenDate);
    if (when < min) {
      return NextResponse.json(
        { error: "Event date must be at least 15 days from today." },
        { status: 400 }
      );
    }

    const order = await prisma.order.create({
      data: {
        userId: body.userId || null,
        status: "PENDING",
        subtotalCents: body.subtotalCents,
        totalCents: body.totalCents,
        deliveryType: body.deliveryType,
        whenDate: when,
        addressText: body.deliveryType === "delivery" ? body.addressText ?? "" : null,
        notes: body.notes ?? null,
        rewardUsed: body.rewardUsed ?? 0,
        customerFirstName: body.customerFirstName,
        customerLastName: body.customerLastName,
        customerEmail: body.customerEmail,
        customerPhone: body.customerPhone,
      },
    });

    // Notify owner (WhatsApp/SMS/email inside this helper)
    await notifyOwner(order);

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error("Create order error:", err);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
