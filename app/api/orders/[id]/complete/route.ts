import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const orderId = params.id;

  try {
    await prisma.order.update({
      where: { id: orderId },
      data: { status: "PAID" }, // or FULFILLED
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to mark order complete" }, { status: 500 });
  }
}
