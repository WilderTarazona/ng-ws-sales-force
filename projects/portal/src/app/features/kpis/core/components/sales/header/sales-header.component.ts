import { Component, OnInit } from '@angular/core';
import { UserTest } from '@portal/core/models';

@Component({
  selector: 'app-sales-header',
  templateUrl: './sales-header.component.html',
  styleUrls: ['./sales-header.component.scss']
})
export class SalesHeaderComponent implements OnInit {

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
