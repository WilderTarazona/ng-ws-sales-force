import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { ProgressBarComponent } from './molecules/progress-bar/progress-bar.component';



@NgModule({
  declarations: [ComponentsComponent, ProgressBarComponent],
  imports: [
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
