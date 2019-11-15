import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-campaign',
  templateUrl: './report-campaign.component.html',
  styleUrls: ['./report-campaign.component.scss']
})
export class ReportCampaignComponent implements OnInit {

  title: string;
  size: string;
  color: string;
  backGround: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Reporte de Campaña';
    this.color = 'white';
    this.backGround = '#817BD0';
  }


}
