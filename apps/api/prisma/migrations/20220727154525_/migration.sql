/*
  Warnings:

  - You are about to drop the `exercise_targets` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `targets` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "exercise_targets" DROP CONSTRAINT "exercise_targets_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "exercise_targets" DROP CONSTRAINT "exercise_targets_targetId_fkey";

-- DropTable
DROP TABLE "exercise_targets";

-- CreateTable
CREATE TABLE "_ExerciseToTarget" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ExerciseToTarget_AB_unique" ON "_ExerciseToTarget"("A", "B");

-- CreateIndex
CREATE INDEX "_ExerciseToTarget_B_index" ON "_ExerciseToTarget"("B");

-- CreateIndex
CREATE UNIQUE INDEX "targets_name_key" ON "targets"("name");

-- AddForeignKey
ALTER TABLE "_ExerciseToTarget" ADD CONSTRAINT "_ExerciseToTarget_A_fkey" FOREIGN KEY ("A") REFERENCES "exercises"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToTarget" ADD CONSTRAINT "_ExerciseToTarget_B_fkey" FOREIGN KEY ("B") REFERENCES "targets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
