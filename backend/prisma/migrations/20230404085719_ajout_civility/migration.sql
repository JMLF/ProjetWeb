/*
  Warnings:

  - A unique constraint covering the columns `[civilityId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "civilityId" INTEGER;

-- CreateTable
CREATE TABLE "Civility" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Civility_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_civilityId_key" ON "User"("civilityId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_civilityId_fkey" FOREIGN KEY ("civilityId") REFERENCES "Civility"("id") ON DELETE SET NULL ON UPDATE CASCADE;
