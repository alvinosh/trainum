import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutsComponent } from './workouts.component';
import { SelectorBarModule } from '@trainum/ui';
import { FilterPipe } from './pipes/filters.pipe';

@NgModule({
  declarations: [WorkoutsComponent, FilterPipe],
  imports: [CommonModule, WorkoutsRoutingModule, SelectorBarModule],
})
export class WorkotusModule {}
