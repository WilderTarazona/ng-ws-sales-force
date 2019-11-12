import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSeComponent } from './pages/home-se/home-se.component';
import { MainComponent } from './main.component';
import { HomeGzComponent } from './pages/home-gz/home-gz.component';
import { HomeGrComponent } from './pages/home-gr/home-gr.component';
import { HomeDvComponent } from './pages/home-dv/home-dv.component';
import {MainCoreModule} from './core/core.module';
import {AppRoutingModule} from '../../app-routing.module';



@NgModule({
  declarations: [HomeSeComponent, MainComponent, HomeGzComponent, HomeGrComponent, HomeDvComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MainCoreModule
  ]
})
export class MainModule { }
