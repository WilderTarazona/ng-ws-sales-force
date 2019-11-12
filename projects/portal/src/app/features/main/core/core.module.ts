import { NgModule } from '@angular/core';
import {GuardsModule} from './guards/guards.module';
import {HttpModule} from './http/http.module';
import {ComponentsModule} from './components/components.module';

@NgModule({
  imports: [
    GuardsModule,
    HttpModule,
    ComponentsModule
  ],
  exports: [
    GuardsModule,
    HttpModule,
    ComponentsModule
  ]
})
export class MainCoreModule { }
