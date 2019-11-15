import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { ProgressBarComponent } from './molecules/progress-bar/progress-bar.component';
import { FilterComponent } from './molecules/filter/filter.component';
import { PaginationComponent } from './molecules/pagination/pagination.component';
import { ListComponent } from './molecules/list/list.component';
import { FindComponent } from './molecules/find/find.component';
import { ItemTitleComponent } from './molecules/item-title/item-title.component';
import { ItemDescriptionComponent } from './molecules/item-description/item-description.component';



@NgModule({
  declarations: [ComponentsComponent, ProgressBarComponent, FilterComponent, PaginationComponent, ListComponent, FindComponent, ItemTitleComponent, ItemDescriptionComponent],
  imports: [
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
