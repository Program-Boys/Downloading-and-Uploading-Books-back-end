/*
  Warnings:

  - Made the column `bookId` on table `BookFile` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "BookFile" DROP CONSTRAINT "BookFile_bookId_fkey";

-- AlterTable
ALTER TABLE "BookFile" ALTER COLUMN "bookId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "BookFile" ADD CONSTRAINT "BookFile_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
