/*
  Warnings:

  - You are about to drop the column `genri` on the `Books` table. All the data in the column will be lost.
  - Added the required column `gender` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Books" DROP COLUMN "genri",
ADD COLUMN     "gender" TEXT NOT NULL;
