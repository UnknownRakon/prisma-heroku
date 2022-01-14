-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "group" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "speciality" TEXT NOT NULL,
    "dorm" TEXT NOT NULL,
    "stud" TEXT,
    "prof" INTEGER,
    "dormnum" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
