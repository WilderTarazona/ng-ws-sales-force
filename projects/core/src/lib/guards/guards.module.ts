import { NgModule } from '@angular/core';
import {RoleGuard} from './role.guard';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  providers: [
    RoleGuard
  ]
})
export class PortalGuardsModule { }
