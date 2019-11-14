import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gain',
  templateUrl: './gain.component.html',
  styleUrls: ['./gain.component.scss']
})
export class GainComponent implements OnInit {

  title: string;
  fontSize1: string;
  lineWeight: string;
  color: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Ganancia y Saldo';
    this.fontSize1 = '30px';
    this.lineWeight = '17px';
    this.color = 'green';

  }

}
