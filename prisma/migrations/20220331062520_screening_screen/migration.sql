/*
  Warnings:

  - You are about to drop the column `screenId` on the `Movie` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_screenId_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "screenId";
