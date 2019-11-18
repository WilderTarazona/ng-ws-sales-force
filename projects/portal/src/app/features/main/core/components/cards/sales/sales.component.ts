import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  title: string;
  color: string;
  sale: boolean;
  roadBright: boolean;
  others: boolean;
  dop: boolean;
  data: boolean;
  size: string;

  constructor() {
    this.data = true;
    this.sale = false;
    this.roadBright = false;
    this.others = false;
    this.dop = true;
  }

  ngOnInit() {
    this.title = 'Venta y Pedidos';
    this.size = 'xmd';
    this.color = '#000000';
  }

}
