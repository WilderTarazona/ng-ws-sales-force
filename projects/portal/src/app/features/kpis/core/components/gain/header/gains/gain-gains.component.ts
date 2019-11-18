import { Component, OnInit } from '@angular/core';
import { UserTest } from '@portal/core/models';

@Component({
  selector: 'app-gain-gains',
  templateUrl: './gain-gains.component.html',
  styleUrls: ['./gain-gains.component.scss']
})
export class GainGainsComponent implements OnInit {

  role: string;
  phase: string;
  roadBright: boolean;
  sale: boolean;
  userTest: UserTest;

  constructor() {}

  ngOnInit() {
    this.userTest = new UserTest();
    this.role = this.userTest.role;
    this.roadBright = this.userTest.roadBright;
    this.sale = this.userTest.sale;
    console.log('Gain-gains, es venta :' + this.sale + ' es camino brillante :' + this.roadBright);
  }

}
