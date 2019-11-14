import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retention',
  templateUrl: './retention.component.html',
  styleUrls: ['./retention.component.scss']
})
export class RetentionComponent implements OnInit {

  title: string;
  fontSize1: string;
  lineWeight: string;
  color: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Ciclo de Nuevas';
    this.fontSize1 = '30px';
    this.lineWeight = '17px';
    this.color = 'green';

  }

}
