import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesSeComponent} from './pages/index';
import { RetentionSeComponent } from './pages/retention/retention-se/retention-se.component';
import { GainSeComponent } from './pages/gain/gain-se/gain-se.component';


const routes: Routes = [
  { path: '', redirectTo: 'sales', pathMatch: 'full'},
  { path: 'sales', component: SalesSeComponent },
  { path: 'retention', component: RetentionSeComponent },
  { path: 'gain', component: GainSeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KpisRoutingModule { }
