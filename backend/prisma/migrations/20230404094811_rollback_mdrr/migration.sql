/*
  Warnings:

  - You are about to drop the `_CivilityToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CivilityToUser" DROP CONSTRAINT "_CivilityToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CivilityToUser" DROP CONSTRAINT "_CivilityToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "civilityId" INTEGER NOT NULL DEFAULT 3;

-- DropTable
DROP TABLE "_CivilityToUser";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_civilityId_fkey" FOREIGN KEY ("civilityId") REFERENCES "Civility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
