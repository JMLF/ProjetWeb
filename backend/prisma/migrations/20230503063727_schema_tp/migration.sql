/*
  Warnings:

  - You are about to drop the `Civility` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Statut" AS ENUM ('A_FAIRE', 'EN_COURS', 'TERMINE');

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_civilityId_fkey";

-- DropTable
DROP TABLE "Civility";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "titre" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "statut" "Statut" NOT NULL DEFAULT 'A_FAIRE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);
