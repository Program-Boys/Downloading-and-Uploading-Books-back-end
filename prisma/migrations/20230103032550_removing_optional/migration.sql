/*
  Warnings:

  - Made the column `originalName` on table `BookFile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `filename` on table `BookFile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `path` on table `BookFile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BookFile" ALTER COLUMN "originalName" SET NOT NULL,
ALTER COLUMN "filename" SET NOT NULL,
ALTER COLUMN "path" SET NOT NULL;
