-- DropForeignKey
ALTER TABLE "BookFile" DROP CONSTRAINT "BookFile_bookId_fkey";

-- AlterTable
ALTER TABLE "BookFile" ALTER COLUMN "bookId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "BookFile" ADD CONSTRAINT "BookFile_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Books"("id") ON DELETE SET NULL ON UPDATE CASCADE;
