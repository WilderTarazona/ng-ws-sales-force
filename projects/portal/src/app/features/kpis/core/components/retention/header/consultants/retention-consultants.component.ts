import { Component, OnInit } from '@angular/core';
import { UserTest } from '@portal/core/models';

@Component({
  selector: 'app-retention-consultants',
  templateUrl: './retention-consultants.component.html',
  styleUrls: ['./retention-consultants.component.scss']
})
export class RetentionConsultantsComponent implements OnInit {

  role: string;
  phase: string;
  roadBright: boolean;
  others: boolean;
  sale: boolean;
  userTest: UserTest;

  consultants: string;
  retentions: string;

  constructor() { }

  ngOnInit() {
    this.userTest = new UserTest();
    this.role = this.userTest.role;
    this.roadBright = this.userTest.roadBright;
    this.others = this.userTest.others;
    this.sale = this.userTest.sale;
    if (this.sale && !this.roadBright) {
      this.consultants = '7 Consultoras 6D6';
    } else if (!this.sale && !this.others) {
      this.consultants = '7 de 9 Consultoras 6D6';
    }
    console.log('Sales-Sale-Catalog, es venta :' + this.sale + ' es camino brillante :' + this.roadBright);
  }

}
