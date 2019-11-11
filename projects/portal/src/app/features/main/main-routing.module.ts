import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';
import {HomeSeComponent} from './pages/home-se/home-se.component';
import {HomeGrComponent} from './pages/home-gr/home-gr.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home-se',
        component: HomeSeComponent
      },
      {
        path: 'home-gr',
        component: HomeGrComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
