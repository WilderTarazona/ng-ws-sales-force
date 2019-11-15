import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesSeComponent} from './pages/index';


const routes: Routes = [
  { path: '', redirectTo: 'sales', pathMatch: 'full'},
  { path: 'sales', component: SalesSeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KpisRoutingModule { }
