import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-campaign',
  templateUrl: './report-campaign.component.html',
  styleUrls: ['./report-campaign.component.scss']
})
export class ReportCampaignComponent implements OnInit {

  title: string;
  fontSize1: string;
  lineWeight: string;
  color: string;
  backGround: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Reporte de Campaña';
    this.fontSize1 = '30px';
    this.lineWeight = '17px';
    this.color = 'green';
    this.backGround = '#817BD0';
  }


}
