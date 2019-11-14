import { Component, OnInit } from '@angular/core';
import {UserTest} from '@portal/core/models';

@Component({
  selector: 'app-sale-catalog',
  templateUrl: './sale-catalog.component.html',
  styleUrls: ['./sale-catalog.component.scss']
})
export class SaleCatalogComponent implements OnInit {


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
  }

}
