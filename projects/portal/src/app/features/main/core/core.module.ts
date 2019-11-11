import { NgModule } from '@angular/core';
import {GuardsModule} from './guards/guards.module';
import {HttpModule} from './http/http.module';

@NgModule({
  declarations: [],
  imports: [
    GuardsModule,
    HttpModule
  ],
  exports: [
    GuardsModule,
    HttpModule
  ]
})
export class MainCoreModule { }
