import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderMenuItemsComponent } from './header-menu-items/header-menu-items.component';
import { HeaderMenuItemComponent } from './header-menu-items/header-menu-item/header-menu-item.component';



@NgModule({
  declarations: [HeaderComponent, HeaderLogoComponent, HeaderMenuItemsComponent, HeaderMenuItemComponent],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
