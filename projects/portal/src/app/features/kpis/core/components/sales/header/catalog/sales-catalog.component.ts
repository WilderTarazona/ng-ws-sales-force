import { Component, OnInit } from '@angular/core';
import {UserTest} from '@portal/core/models';

@Component({
  selector: 'app-sales-catalog',
  templateUrl: './sales-catalog.component.html',
  styleUrls: ['./sales-catalog.component.scss']
})
export class SalesCatalogComponent implements OnInit {

  role: string;
  phase: string;
  roadBright: boolean;
  sale: boolean;
  userTest: UserTest;

  constructor() { }

  ngOnInit() {
    this.userTest = new UserTest();
    this.role = this.userTest.role;
    this.roadBright = this.userTest.roadBright;
    this.sale = this.userTest.sale;
    console.log('Sales-Sale-Catalog, es venta :' + this.sale + ' es camino brillante :' + this.roadBright);
  }

}
