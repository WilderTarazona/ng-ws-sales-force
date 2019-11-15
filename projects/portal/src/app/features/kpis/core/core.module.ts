import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/sales/filter/filter.component';
import { SaleCatalogComponent } from './components/sales/header/sale-catalog/sale-catalog.component';
import { PegComponent } from './components/sales/header/peg/peg.component';
import { CapitalizationComponent } from './components/sales/header/capitalization/capitalization.component';
import { HeaderComponent } from './components/sales/header/header.component';
import { FindComponent } from './components/sales/find/find.component';
import { PaginationComponent } from './components/sales/pagination/pagination.component';
import { ListComponent } from './components/sales/list/list.component';

const COMPONENTS = [
    FilterComponent,
    SaleCatalogComponent,
    PegComponent,
    CapitalizationComponent,
    HeaderComponent,
    FindComponent,
    PaginationComponent,
    ListComponent
]


@NgModule({
  declarations: [ COMPONENTS ],
  imports: [CommonModule],
  exports: [ COMPONENTS ]
})
export class CommonsModule { }
