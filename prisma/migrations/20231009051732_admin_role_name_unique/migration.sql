/*
  Warnings:

  - A unique constraint covering the columns `[roleName]` on the table `AdminRole` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AdminRole_roleName_key" ON "AdminRole"("roleName");
