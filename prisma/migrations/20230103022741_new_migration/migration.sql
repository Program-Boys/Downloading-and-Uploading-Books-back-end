-- AlterTable
ALTER TABLE "BookFile" ADD COLUMN     "path" TEXT,
ALTER COLUMN "originalName" DROP NOT NULL,
ALTER COLUMN "filename" DROP NOT NULL;
