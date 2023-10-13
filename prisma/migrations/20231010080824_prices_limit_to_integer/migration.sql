/*
  Warnings:

  - Changed the type of `startingQtyLimit` on the `Prices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endingQtyLimit` on the `Prices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Prices" DROP COLUMN "startingQtyLimit",
ADD COLUMN     "startingQtyLimit" INTEGER NOT NULL,
DROP COLUMN "endingQtyLimit",
ADD COLUMN     "endingQtyLimit" INTEGER NOT NULL;
