import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  title: string;
  fontSize: string;
  lineWeight: string;
  color: string;
  sale: boolean;
  roadBright: boolean;
  others: boolean;
  data: boolean;
  size: string;

  constructor() {
    this.data = true;
    this.sale = false;
    this.roadBright = true;
    this.others = true;
  }

  ngOnInit() {
    this.title = 'Venta y Pedidos';
    this.fontSize = '30px';
    this.lineWeight = '17px';
    this.color = 'green';
    this.size = 'xlg';

  }

}
