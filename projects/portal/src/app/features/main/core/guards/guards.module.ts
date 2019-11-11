import { NgModule } from '@angular/core';
import {PortalServicesModule} from '@portal/core/services';
import {RolGuard} from './rol.guard';

@NgModule({
  declarations: [],
  imports: [
    PortalServicesModule
  ],
  providers: [
    RolGuard
  ]
})
export class GuardsModule { }
