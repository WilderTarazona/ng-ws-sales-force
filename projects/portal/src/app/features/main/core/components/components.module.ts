import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GainComponent } from './cards/gain/gain.component';
import { InspiraComponent } from './cards/inspira/inspira.component';
import { ReportCampaignComponent } from './cards/report-campaign/report-campaign.component';
import { RetentionComponent } from './cards/retention/retention.component';
import { SalesComponent } from './cards/sales/sales.component';
import { SectionListComponent } from './section-list/section-list.component';
import { UneteComponent } from './cards/unete/unete.component';
import { ProfileUserComponent } from './profile/profile-user/profile-user.component';
import { ProfileCampaignComponent } from './profile/profile-campaign/profile-campaign.component';
import { MenubarModule } from 'primeng/menubar';
import { ProgressBarModule } from 'primeng/progressbar';
import { UITextModule } from '@portal/components/text';
import { UITitleModule } from '@portal/components/title';
import { UICardModule, UICardHeaderModule } from '@portal/components/card';
import { UIIconModule } from '@portal/components/icon';
import { UIInfoModule } from '@portal/components/info';
import { UIProgressBarModule } from '@portal/components/progress-bar';
import { TableModule } from 'primeng/table';
import { RoadBrightComponent } from './cards/road-bright/road-bright.component';

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
  RoadBrightComponent,
  ProfileCampaignComponent,
  ProfileUserComponent
];

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    MenubarModule,
    TableModule,
    UIProgressBarModule,
    UITextModule,
    UITitleModule,
    UICardModule,
    UICardHeaderModule,
    UIIconModule,
    UIInfoModule
  ],
  exports: [COMPONENTS]
})
export class ComponentsModule {}
