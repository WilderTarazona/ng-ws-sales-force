import { Component, OnInit } from '@angular/core';
import { UserTest } from '@portal/core/models';

@Component({
  selector: 'app-retention-header',
  templateUrl: './retention-header.component.html',
  styleUrls: ['./retention-header.component.scss']
})
export class RetentionHeaderComponent implements OnInit {

  role: string;
  phase: string;
  roadBright: boolean;
  others: boolean;
  sale: boolean;
  userTest: UserTest;
  constructor() { }

  ngOnInit() {
    this.userTest = new UserTest();
    this.role = this.userTest.role;
    this.roadBright = this.userTest.roadBright;
    this.others = this.userTest.others;
    this.sale = this.userTest.sale;
  }

}
