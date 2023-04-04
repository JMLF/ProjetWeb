-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "surname" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
