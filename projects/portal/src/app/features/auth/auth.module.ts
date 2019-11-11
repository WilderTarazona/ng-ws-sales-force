import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import {AuthCoreModule} from './core/core.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PortalCoreModule} from '@portal/core';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    AuthCoreModule,
    PortalCoreModule
  ]
})
export class AuthModule { }
