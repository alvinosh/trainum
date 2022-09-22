import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutsComponent } from './workouts.component';
import {
  ButtonModule,
  ExpandMenuModule,
  SelectorBarModule,
  StopPropagationModule,
} from '@trainum/ui';
import { FilterPipe } from './pipes/filters.pipe';
import { CreateWorkoutFormModule } from '../../ui/create-workout-form/create-workout-form.module';

@NgModule({
  declarations: [WorkoutsComponent, FilterPipe],
  imports: [
    CommonModule,
    WorkoutsRoutingModule,
    SelectorBarModule,
    ButtonModule,
    ExpandMenuModule,
    StopPropagationModule,
    CreateWorkoutFormModule
  ],
})
export class WorkotusModule {}
