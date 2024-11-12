/*
  Warnings:

  - Added the required column `paidAmount` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remainingAmount` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" REAL NOT NULL,
    "paymentDate" DATETIME NOT NULL,
    "invoiceId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Payment_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Invoice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "invoiceNumber" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "subTotal" REAL NOT NULL,
    "total" REAL NOT NULL,
    "remainingAmount" REAL NOT NULL,
    "paidAmount" REAL NOT NULL,
    "invoiceDate" DATETIME NOT NULL,
    "invoiceIsuuesd" BOOLEAN NOT NULL DEFAULT false,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "clientId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "saleId" TEXT,
    CONSTRAINT "Invoice_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Invoice_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Invoice" ("clientId", "createdAt", "id", "invoiceDate", "invoiceIsuuesd", "invoiceNumber", "isPaid", "quantity", "saleId", "subTotal", "total", "updatedAt") SELECT "clientId", "createdAt", "id", "invoiceDate", "invoiceIsuuesd", "invoiceNumber", "isPaid", "quantity", "saleId", "subTotal", "total", "updatedAt" FROM "Invoice";
DROP TABLE "Invoice";
ALTER TABLE "new_Invoice" RENAME TO "Invoice";
CREATE UNIQUE INDEX "Invoice_saleId_key" ON "Invoice"("saleId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
