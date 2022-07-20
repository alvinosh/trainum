import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarModule } from '../../ui/navbar/navbar.module';
import { TopbarModule } from '../../ui/topbar/topbar.module';

import { ButtonModule, ExpandMenuModule } from '@trainum/ui';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavbarModule,
    TopbarModule,
    ExpandMenuModule,
    ButtonModule,
  ],
})
export class DashboardModule {}
