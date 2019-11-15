import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpisRoutingModule } from './kpis-routing.module';
import { GainComponent } from './pages/gain/gain.component';
import { RetentionComponent } from './pages/retention/retention.component';
import { SalesSeComponent } from './pages/sales/sales-se/sales-se.component';


@NgModule({
  declarations: [GainComponent, RetentionComponent, SalesSeComponent],
  imports: [
    CommonModule,
    KpisRoutingModule
  ]
})
export class KpisModule { }
