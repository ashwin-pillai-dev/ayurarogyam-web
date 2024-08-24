-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Invoice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "invoiceNumber" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "subTotal" REAL NOT NULL,
    "total" REAL NOT NULL,
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
INSERT INTO "new_Invoice" ("clientId", "createdAt", "id", "invoiceDate", "invoiceNumber", "isPaid", "quantity", "saleId", "subTotal", "total", "updatedAt") SELECT "clientId", "createdAt", "id", "invoiceDate", "invoiceNumber", "isPaid", "quantity", "saleId", "subTotal", "total", "updatedAt" FROM "Invoice";
DROP TABLE "Invoice";
ALTER TABLE "new_Invoice" RENAME TO "Invoice";
CREATE UNIQUE INDEX "Invoice_saleId_key" ON "Invoice"("saleId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
