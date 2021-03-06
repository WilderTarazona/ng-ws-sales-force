import { NgModule } from '@angular/core';
import {CryptoService} from './crypto.service';
import {SessionService} from './session.service';

@NgModule({
  providers: [
    CryptoService,
    SessionService
  ]
})
export class PortalServicesModule { }
