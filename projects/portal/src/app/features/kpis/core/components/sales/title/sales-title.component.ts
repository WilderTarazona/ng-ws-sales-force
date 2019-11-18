import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-title',
  templateUrl: './sales-title.component.html',
  styleUrls: ['./sales-title.component.scss']
})
export class SalesTitleComponent implements OnInit {

  title: string;
  color: string;
  sale: boolean;
  roadBright: boolean;
  others: boolean;
  data: boolean;
  size: string;

  constructor() {
    this.data = true;
    this.sale = true;
    this.roadBright = true;
    this.others = false;
  }

  ngOnInit() {
    this.title = 'Venta y Pedidos';
    this.size = 'xmd';
    this.color = '#000000';
  }
}
