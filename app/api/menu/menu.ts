import { prisma } from "@/lib/prisma";
export async function GET(){
  const items = await prisma.product.findMany({ where: { available: true }, orderBy: { name: "asc" } });
  return Response.json(items);
}
