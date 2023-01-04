/*
  Warnings:

  - Added the required column `path` to the `BookFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookFile" ADD COLUMN     "path" TEXT NOT NULL;
