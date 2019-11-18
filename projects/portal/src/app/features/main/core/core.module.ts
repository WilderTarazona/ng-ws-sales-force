import { NgModule } from '@angular/core';
import {HttpModule} from './http/http.module';
import {ComponentsModule} from './components/components.module';

@NgModule({
  imports: [
    HttpModule,
    ComponentsModule
  ],
  exports: [
    HttpModule,
    ComponentsModule
  ]
})
export class MainCoreModule { }
