import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SalesFilterComponent } from "./sales/filter/sales-filter.component";
import { SalesCatalogComponent } from "./sales/header/catalog/sales-catalog.component";
import { SalesPegComponent } from "./sales/header/peg/sales-peg.component";
import { SalesCapitalizationComponent } from "./sales/header/capitalization/sales-capitalization.component";
import { SalesHeaderComponent } from "./sales/header/sales-header.component";
import { SalesFindComponent } from "./sales/find/sales-find.component";
import { SalesListComponent } from "./sales/list/sales-list.component";

import { UICardModule } from "@portal/components/card";
import { UIFilterModule } from "@portal/components/filter";
import { UIPaginationModule } from "@portal/components/pagination";
import { UICheckboxModule } from "@portal/components/checkbox";
import { UITextModule } from "@portal/components/text";
import { UITitleModule } from "@portal/components/title";
import { UIItemDescriptionModule } from "@portal/components/item-description";
import { UIItemTitleModule } from "@portal/components/item-title";
import { UIFindModule } from "@portal/components/find";
import { SalesTitleComponent } from "./sales/title/sales-title.component";
import { SalesGoalComponent } from "./sales/header/goal/sales-goal.component";
import { SalesActivityComponent } from "./sales/header/activity/sales-activity.component";
import { RetentionFilterComponent } from "./retention/filter/retention-filter.component";
import { RetentionFindComponent } from "./retention/find/retention-find.component";
import { RetentionListComponent } from "./retention/list/retention-list.component";
import { RetentionTitleComponent } from "./retention/title/retention-title.component";
import { RetentionHeaderComponent } from "./retention/header/retention-header.component";
import { RetentionConsultantsComponent } from "./retention/header/consultants/retention-consultants.component";
import { RetentionRetentionsComponent } from "./retention/header/retentions/retention-retentions.component";
import { GainFilterComponent } from "./gain/filter/gain-filter.component";
import { GainFindComponent } from "./gain/find/gain-find.component";
import { GainListComponent } from "./gain/list/gain-list.component";
import { GainTitleComponent } from "./gain/title/gain-title.component";
import { GainHeaderComponent } from "./gain/header/gain-header.component";
import { GainGainsComponent } from "./gain/header/gains/gain-gains.component";
import { GainRecoveryComponent } from "./gain/header/recovery/gain-recovery.component";

const COMPONENTS = [
  SalesTitleComponent,
  SalesHeaderComponent,
  SalesGoalComponent,
  SalesActivityComponent,
  SalesCatalogComponent,
  SalesPegComponent,
  SalesCapitalizationComponent,
  SalesFilterComponent,
  SalesFindComponent,
  SalesListComponent,
  RetentionFilterComponent,
  RetentionFindComponent,
  RetentionListComponent,
  RetentionTitleComponent,
  RetentionHeaderComponent,
  RetentionConsultantsComponent,
  RetentionRetentionsComponent,
  GainFilterComponent,
  GainFindComponent,
  GainListComponent,
  GainTitleComponent,
  GainHeaderComponent,
  GainGainsComponent,
  GainRecoveryComponent
];

@NgModule({
  declarations: [COMPONENTS],
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
