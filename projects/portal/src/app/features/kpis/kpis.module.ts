import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpisRoutingModule } from './kpis-routing.module';
import { GainComponent } from './views/gain/gain.component';
import { RetentionComponent } from './views/retention/retention.component';
import { SalesComponent } from './views/sales/sales.component';


@NgModule({
  declarations: [GainComponent, RetentionComponent, SalesComponent],
  imports: [
    CommonModule,
    KpisRoutingModule
  ]
})
export class KpisModule { }
