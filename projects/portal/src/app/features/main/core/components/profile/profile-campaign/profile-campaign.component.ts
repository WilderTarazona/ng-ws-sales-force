import { Component, OnInit } from '@angular/core';
import { SessionService } from '@portal/core/services';
import { ICampaign } from '@portal/core/models';

@Component({
  selector: 'app-profile-campaign',
  templateUrl: './profile-campaign.component.html',
  styleUrls: ['./profile-campaign.component.scss']
})
export class ProfileCampaignComponent implements OnInit {
  campaign: ICampaign;
  kindofCampaign: boolean;
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.campaign = this.sessionService.getCampaign();
    if (this.campaign.phase === 'V') {
      this.kindofCampaign = true;
    } else {
      this.kindofCampaign = false;
    }
  }

}
