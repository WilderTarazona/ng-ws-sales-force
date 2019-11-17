import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpisRoutingModule } from './kpis-routing.module';
import { GainComponent } from './pages/gain/gain.component';
import { SalesSeComponent } from './pages/sales/sales-se/sales-se.component';
import { KpisCoreModule } from './core/core.module';
import { RetentionSeComponent } from './pages/retention/retention-se/retention-se.component';

@NgModule({
  declarations: [GainComponent, SalesSeComponent, RetentionSeComponent],
  imports: [
    CommonModule,
    KpisRoutingModule,
    KpisCoreModule
  ],
  exports: [ GainComponent, SalesSeComponent ]
})
export class KpisModule { }
