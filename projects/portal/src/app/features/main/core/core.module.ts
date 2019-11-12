import { NgModule } from '@angular/core';
import {GuardsModule} from './guards/guards.module';
import {HttpModule} from './http/http.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    GuardsModule,
    HttpModule
  ],
  exports: [
    GuardsModule,
    HttpModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class MainCoreModule { }
