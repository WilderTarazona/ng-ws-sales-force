import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retention',
  templateUrl: './retention.component.html',
  styleUrls: ['./retention.component.scss']
})
export class RetentionComponent implements OnInit {

  title: string;
  color: string;
  sale: boolean;
  roadBright: boolean;
  others: boolean;
  data: boolean;
  size: string;
  cars: any[];

  constructor() {
    this.data = true;
    this.sale = false;
    this.roadBright = false;
    this.others = false;
    this.cars = ['uno'];
  }

  ngOnInit() {
    this.title = 'Ciclo de Nuevas';
    this.size = 'xmd';
    this.color = '#000000';
  }

}
