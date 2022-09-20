/*
  Warnings:

  - You are about to drop the column `userId` on the `Workout` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `exercises` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_userId_fkey";

-- DropForeignKey
ALTER TABLE "exercises" DROP CONSTRAINT "exercises_userId_fkey";

-- AlterTable
ALTER TABLE "Workout" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "exercises" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "ExercisesOnUsers" (
    "exerciseId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "ExercisesOnUsers_pkey" PRIMARY KEY ("exerciseId","userId")
);

-- AddForeignKey
ALTER TABLE "ExercisesOnUsers" ADD CONSTRAINT "ExercisesOnUsers_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExercisesOnUsers" ADD CONSTRAINT "ExercisesOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
