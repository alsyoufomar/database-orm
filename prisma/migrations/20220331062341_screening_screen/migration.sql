-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "screenId" INTEGER;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("id") ON DELETE SET NULL ON UPDATE CASCADE;
