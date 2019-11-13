import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  text: string;
  fontSize1: string;
  lineWeight: string;
  color: string;

  constructor() { }

  ngOnInit() {
    this.text = 'ui-title hereeeee!!';
    this.fontSize1 = '30px';
    this.lineWeight = '17px';
    this.color = 'green';

  }

}
