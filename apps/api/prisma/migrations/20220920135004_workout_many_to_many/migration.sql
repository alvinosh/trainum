-- CreateTable
CREATE TABLE "WorkoutsOnUsers" (
    "workoutId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorkoutsOnUsers_pkey" PRIMARY KEY ("workoutId","userId")
);

-- AddForeignKey
ALTER TABLE "WorkoutsOnUsers" ADD CONSTRAINT "WorkoutsOnUsers_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutsOnUsers" ADD CONSTRAINT "WorkoutsOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
