import { NgModule } from '@angular/core';
import {PortalServicesModule} from '@portal/core/services';
import {PortalInterceptorsModule} from '@portal/core/interceptors';
import {PortalLogModule} from '@portal/core/log';
import {PortalRestModule} from '@portal/core/rest';
import {PortalGuardsModule} from '@portal/core/guards';

const MODULES = [PortalServicesModule, PortalInterceptorsModule, PortalLogModule, PortalRestModule, PortalGuardsModule];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class PortalCoreModule { }
