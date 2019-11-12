import { NgModule } from '@angular/core';
import {PortalPagesModule} from '@portal/core/pages';
import {PortalServicesModule} from '@portal/core/services';
import {PortalInterceptorsModule} from '@portal/core/interceptors';
import {PortalLogModule} from '@portal/core/log';
import {PortalRestModule} from '@portal/core/rest';

const MODULES = [PortalServicesModule, PortalInterceptorsModule, PortalLogModule, PortalRestModule];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class PortalCoreModule { }
