import { Component, OnInit } from '@angular/core';
import { UserTest } from '@portal/core/models';

@Component({
  selector: 'app-gain-recovery',
  templateUrl: './gain-recovery.component.html',
  styleUrls: ['./gain-recovery.component.scss']
})
export class GainRecoveryComponent implements OnInit {

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
    console.log('Gain-recovery, es venta :' + this.sale + ' es camino brillante :' + this.roadBright);
  }

}
