import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unete',
  templateUrl: './unete.component.html',
  styleUrls: ['./unete.component.scss']
})
export class UneteComponent implements OnInit {

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
    this.title = 'Únete';
    this.size = 'xmd';
    this.color = '#000000';
  }

}
