import { Component, OnInit } from '@angular/core';
import { UserTest } from '@portal/core/models';

@Component({
  selector: 'app-sales-goal',
  templateUrl: './sales-goal.component.html',
  styleUrls: ['./sales-goal.component.scss']
})
export class SalesGoalComponent implements OnInit {

  role: string;
  phase: string;
  roadBright: boolean;
  sale: boolean;
  userTest: UserTest;
  goalText: string;
  goal: string;

  constructor() {}

  ngOnInit() {
    this.userTest = new UserTest();
    this.role = this.userTest.role;
    this.roadBright = this.userTest.roadBright;
    this.sale = this.userTest.sale;
    console.log('Sales-Peg, es venta :' + this.sale + ' es camino brillante :' + this.roadBright);
    if (this.sale) {
      if (this.roadBright) {
        this.goalText = 'Meta Venta Cat. C09';
        this.goal = '$ 60,000';
      } else {
        this.goalText = 'Meta Pedidos C09';
        this.goal = '100 Pedidos';
      }
    }
  }

}
