/*
  Warnings:

  - You are about to drop the column `customerId` on the `Contact` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_customerId_fkey";

-- DropIndex
DROP INDEX "Contact_customerId_key";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "customerId";
