import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { ProfileUserComponent } from './profile/profile-user/profile-user.component';
import { ProfileCampaignComponent } from './profile/profile-campaign/profile-campaign.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProfileUserComponent, ProfileCampaignComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, ProfileCampaignComponent]
})
export class ComponentsModule { }
