import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const COMPONENTS = [
    DashboardComponent
];

@NgModule({
  imports: [
        SharedModule,
  ],
  declarations: [...COMPONENTS],
})
export class PagesModule {}
