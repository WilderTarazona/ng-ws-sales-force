import { Component, OnInit } from '@angular/core';
import {UserTest} from '@portal/core/models';

@Component({
  selector: 'app-peg',
  templateUrl: './peg.component.html',
  styleUrls: ['./peg.component.scss']
})
export class PegComponent implements OnInit {
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
