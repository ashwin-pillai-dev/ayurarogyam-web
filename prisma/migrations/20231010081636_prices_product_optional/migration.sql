-- DropForeignKey
ALTER TABLE "Prices" DROP CONSTRAINT "Prices_productId_fkey";

-- AlterTable
ALTER TABLE "Prices" ALTER COLUMN "productId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Prices" ADD CONSTRAINT "Prices_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
