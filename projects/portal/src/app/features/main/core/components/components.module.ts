import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { GainComponent } from './cards/gain/gain.component';
import { InspiraComponent } from './cards/inspira/inspira.component';
import { ReportCampaignComponent } from './cards/report-campaign/report-campaign.component';
import { RetentionComponent } from './cards/retention/retention.component';
import { SalesComponent } from './cards/sales/sales.component';
import { SectionListComponent } from './section-list/section-list.component';
import { UneteComponent } from './cards/unete/unete.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProfileComponent, GainComponent, InspiraComponent, ReportCampaignComponent, RetentionComponent, SalesComponent, SectionListComponent, UneteComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class ComponentsModule { }
