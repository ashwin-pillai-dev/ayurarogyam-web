/*
  Warnings:

  - A unique constraint covering the columns `[contactNumber]` on the table `Partner` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contactNumber` to the `Partner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Partner" ADD COLUMN     "contactNumber" TEXT NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Partner_contactNumber_key" ON "Partner"("contactNumber");
