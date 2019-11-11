import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {OauthService} from './oauth.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [OauthService]
})
export class PortalRestModule { }
