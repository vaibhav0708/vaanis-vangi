import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const items = [
    { name:"Undhiyu (Tray)", slug:"undhiyu-tray", category:"By Tray", priceCents: 10900, tags:["gujarati","veg"], description:"Classic winter special.", imageUrl:"" },
    { name:"Paneer Lababdar", slug:"paneer-lababdar", category:"By Tray", priceCents: 9900, tags:["paneer","veg"], description:"Creamy rich paneer.", imageUrl:"" },
    { name:"Gujarati Daal", slug:"gujarati-daal", category:"By Tray", priceCents: 6900, tags:["dal","veg"], description:"Sweet-tangy daal.", imageUrl:"" }
  ];
  for (const it of items) await prisma.product.upsert({ where:{ slug: it.slug }, update:{}, create: it });
}
main().finally(()=>prisma.$disconnect());
