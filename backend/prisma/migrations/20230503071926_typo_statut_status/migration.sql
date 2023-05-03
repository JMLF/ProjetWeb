/*
  Warnings:

  - You are about to drop the column `statut` on the `Ticket` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('A_FAIRE', 'EN_COURS', 'TERMINE');

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "statut",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'A_FAIRE';

-- DropEnum
DROP TYPE "Statut";
