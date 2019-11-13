import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { GainComponent } from './cards/gain/gain.component';
import { InspiraComponent } from './cards/inspira/inspira.component';
import { ReportCampaignComponent } from './cards/report-campaign/report-campaign.component';
import { RetentionComponent } from './cards/retention/retention.component';
import { SalesComponent } from './cards/sales/sales.component';
import { SectionListComponent } from './section-list/section-list.component';
import { UneteComponent } from './cards/unete/unete.component';
import { ProfileUserComponent } from './profile/profile-user/profile-user.component';
import { ProfileCampaignComponent } from './profile/profile-campaign/profile-campaign.component';
import {MenubarModule} from 'primeng/menubar';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  GainComponent,
  InspiraComponent,
  ReportCampaignComponent,
  RetentionComponent,
  SalesComponent,
  SectionListComponent,
  UneteComponent,
  ProfileCampaignComponent,
  ProfileUserComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [COMPONENTS]
})
export class ComponentsModule { }
