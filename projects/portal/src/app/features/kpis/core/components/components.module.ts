import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './sales/filter/filter.component';
import { SaleCatalogComponent } from './sales/header/sale-catalog/sale-catalog.component';
import { PegComponent } from './sales/header/peg/peg.component';
import { CapitalizationComponent } from './sales/header/capitalization/capitalization.component';
import { HeaderComponent } from './sales/header/header.component';
import { FindComponent } from './sales/find/find.component';
import { PaginationComponent } from './sales/pagination/pagination.component';
import { ListComponent } from './sales/list/list.component';

const COMPONENTS = [
  FilterComponent,
  SaleCatalogComponent,
  PegComponent,
  CapitalizationComponent,
  HeaderComponent,
  FindComponent,
  PaginationComponent,
  ListComponent
];

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [CommonModule],
  exports: [ COMPONENTS ]
})
export class ComponentsModule { }
