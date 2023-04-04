/*
  Warnings:

  - You are about to drop the column `civilityId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_civilityId_fkey";

-- DropIndex
DROP INDEX "User_civilityId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "civilityId";

-- CreateTable
CREATE TABLE "_CivilityToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CivilityToUser_AB_unique" ON "_CivilityToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CivilityToUser_B_index" ON "_CivilityToUser"("B");

-- AddForeignKey
ALTER TABLE "_CivilityToUser" ADD CONSTRAINT "_CivilityToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Civility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CivilityToUser" ADD CONSTRAINT "_CivilityToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
