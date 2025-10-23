import { PrismaClient } from "@prisma/client";
import { MENU_ITEMS } from "../data/menuItems";

const prisma = new PrismaClient();

async function main() {
  console.log("🧹 Clearing old products...");
  await prisma.product.deleteMany();

  console.log("🌱 Seeding products from MENU_ITEMS...");
  await prisma.product.createMany({
    data: MENU_ITEMS.map((item) => ({
      name: item.name,
      slug: item.name.toLowerCase().replace(/\s+/g, "-"),
      category: item.category,
      priceCents:
        item.prices?.full
          ? item.prices.full * 100
          : item.prices?.half
          ? item.prices.half * 100
          : 0,
      imageUrl: item.image || null,
      description: item.description || "Delicious and freshly prepared.",
      available: true,
    })),
  });

  console.log(`✅ Seeded ${MENU_ITEMS.length} menu items!`);
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
