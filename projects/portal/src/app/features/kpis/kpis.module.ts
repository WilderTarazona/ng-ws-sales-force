import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpisRoutingModule } from './kpis-routing.module';
import { SalesSeComponent } from './pages/sales/sales-se/sales-se.component';
import { KpisCoreModule } from './core/core.module';
import { RetentionSeComponent } from './pages/retention/retention-se/retention-se.component';
import { GainSeComponent } from './pages/gain/gain-se/gain-se.component';

@NgModule({
  declarations: [SalesSeComponent, RetentionSeComponent, GainSeComponent],
  imports: [
    CommonModule,
    KpisRoutingModule,
    KpisCoreModule
  ],
  exports: [ SalesSeComponent ]
})
export class KpisModule { }
