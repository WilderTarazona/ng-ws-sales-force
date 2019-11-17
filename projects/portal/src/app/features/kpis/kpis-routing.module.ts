import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesSeComponent} from './pages/index';
import { RetentionSeComponent } from './pages/retention/retention-se/retention-se.component';


const routes: Routes = [
  { path: '', redirectTo: 'sales', pathMatch: 'full'},
  { path: 'sales', component: SalesSeComponent },
  { path: 'retention', component: RetentionSeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KpisRoutingModule { }
