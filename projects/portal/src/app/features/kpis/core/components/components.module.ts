import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesFilterComponent } from './sales/filter/sales-filter.component';
import { SalesCatalogComponent } from './sales/header/catalog/sales-catalog.component';
import { SalesPegComponent } from './sales/header/peg/sales-peg.component';
import { SalesCapitalizationComponent } from './sales/header/capitalization/sales-capitalization.component';
import { SalesHeaderComponent } from './sales/header/sales-header.component';
import { SalesFindComponent } from './sales/find/sales-find.component';
import { SalesListComponent } from './sales/list/sales-list.component';

import { UICardModule } from '@portal/components/card';
import { UIFilterModule } from '@portal/components/filter';
import { UIPaginationModule } from '@portal/components/pagination';
import { UICheckboxModule } from '@portal/components/checkbox';
import { UITextModule } from '@portal/components/text';
import { UITitleModule } from '@portal/components/title';
import { UIItemDescriptionModule } from '@portal/components/item-description';
import { UIItemTitleModule } from '@portal/components/item-title';
import { UIFindModule } from '@portal/components/find';
import { SalesTitleComponent } from './sales/title/sales-title.component';

const COMPONENTS = [
  SalesFilterComponent,
  SalesCatalogComponent,
  SalesPegComponent,
  SalesCapitalizationComponent,
  SalesHeaderComponent,
  SalesFindComponent,
  SalesListComponent,
  SalesTitleComponent
];

@NgModule({
  declarations: [COMPONENTS, SalesTitleComponent],
  imports: [
    CommonModule,
    UIFilterModule,
    UICardModule,
    UIFilterModule,
    UIPaginationModule,
    UICheckboxModule,
    UITextModule,
    UITitleModule,
    UIItemDescriptionModule,
    UIItemTitleModule,
    UIFindModule
  ],
  exports: [COMPONENTS]
})
export class ComponentsModule {}
