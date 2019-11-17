import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gain',
  templateUrl: './gain.component.html',
  styleUrls: ['./gain.component.scss']
})
export class GainComponent implements OnInit {

  title: string;
  color: string;
  sale: boolean;
  roadBright: boolean;
  dop: boolean;
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
    this.title = 'Ganacia y Saldo';
    this.size = 'xmd';
    this.color = '#000000';
  }

}
