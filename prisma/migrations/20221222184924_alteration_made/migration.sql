-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_ownerId_fkey";

-- AlterTable
ALTER TABLE "Books" ALTER COLUMN "ownerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
