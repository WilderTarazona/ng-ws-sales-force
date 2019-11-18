import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspira',
  templateUrl: './inspira.component.html',
  styleUrls: ['./inspira.component.scss']
})
export class InspiraComponent implements OnInit {
  title: string;
  color: string;
  sale: boolean;
  roadBright: boolean;
  others: boolean;
  data: boolean;
  size: string;

  constructor() {
    this.data = true;
    this.sale = true;
    this.roadBright = true;
    this.others = false;
  }

  ngOnInit() {
    this.title = 'Programa Inspira';
    this.size = 'xmd';
    this.color = '#000000';
  }
}
