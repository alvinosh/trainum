import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExercisesComponent } from './exercises.component';
import { SelectorBarModule } from '@trainum/ui';
import { ExerciseCardModule } from '../../ui/exercise-card/exercise-card.module';

@NgModule({
  declarations: [ExercisesComponent],
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    SelectorBarModule,
    ExerciseCardModule,
  ],
})
export class ExercisesModule {}
