-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InventoryUpdate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "inventoryId" TEXT NOT NULL,
    "qty" REAL NOT NULL,
    "updateDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "inward" BOOLEAN NOT NULL DEFAULT true,
    "supplier" TEXT,
    "notes" TEXT,
    "invoiceNumber" TEXT NOT NULL,
    "invoice" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "InventoryUpdate_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InventoryUpdate" ("createdAt", "id", "inventoryId", "invoice", "invoiceNumber", "notes", "qty", "supplier", "updateDate", "updatedAt") SELECT "createdAt", "id", "inventoryId", "invoice", "invoiceNumber", "notes", "qty", "supplier", "updateDate", "updatedAt" FROM "InventoryUpdate";
DROP TABLE "InventoryUpdate";
ALTER TABLE "new_InventoryUpdate" RENAME TO "InventoryUpdate";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
