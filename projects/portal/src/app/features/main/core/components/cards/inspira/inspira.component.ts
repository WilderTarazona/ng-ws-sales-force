import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspira',
  templateUrl: './inspira.component.html',
  styleUrls: ['./inspira.component.scss']
})
export class InspiraComponent implements OnInit {
  title: string;
  fontSize1: string;
  lineWeight: string;
  color: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Programa Inspira';
    this.fontSize1 = '30px';
    this.lineWeight = '17px';
    this.color = 'green';

  }
}
