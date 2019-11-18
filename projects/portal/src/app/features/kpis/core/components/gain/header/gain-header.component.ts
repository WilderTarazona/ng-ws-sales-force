import { Component, OnInit } from '@angular/core';
import { UserTest } from '@portal/core/models';

@Component({
  selector: 'app-gain-header',
  templateUrl: './gain-header.component.html',
  styleUrls: ['./gain-header.component.scss']
})
export class GainHeaderComponent implements OnInit {

  role: string;
  phase: string;
  roadBright: boolean;
  dop: boolean;
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
