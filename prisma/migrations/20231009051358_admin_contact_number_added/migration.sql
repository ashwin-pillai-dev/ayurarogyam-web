/*
  Warnings:

  - A unique constraint covering the columns `[contactNumber]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contactNumber` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "contactNumber" TEXT NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_contactNumber_key" ON "Admin"("contactNumber");
