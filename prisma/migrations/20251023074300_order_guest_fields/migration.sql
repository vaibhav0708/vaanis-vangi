/*
  Warnings:

  - You are about to drop the column `whatsappTo` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "whatsappTo",
ADD COLUMN     "customerEmail" TEXT,
ADD COLUMN     "customerFirstName" TEXT,
ADD COLUMN     "customerLastName" TEXT,
ADD COLUMN     "customerPhone" TEXT;
