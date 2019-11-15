import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-road-bright',
  templateUrl: './road-bright.component.html',
  styleUrls: ['./road-bright.component.scss']
})
export class RoadBrightComponent implements OnInit {

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
    this.sale = true;
    this.roadBright = false;
    this.others = false;
    this.cars = ['uno'];
  }

  ngOnInit() {
    this.title = 'Camino Brillante';
    this.size = 'xmd';
    this.color = '#000000';
  }

}
