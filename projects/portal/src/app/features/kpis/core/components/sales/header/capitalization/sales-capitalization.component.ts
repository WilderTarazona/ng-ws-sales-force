import { Component, OnInit } from '@angular/core';
import {UserTest} from '@portal/core/models';

@Component({
  selector: 'app-sales-capitalization',
  templateUrl: './sales-capitalization.component.html',
  styleUrls: ['./sales-capitalization.component.scss']
})
export class SalesCapitalizationComponent implements OnInit {

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
