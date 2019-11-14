import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unete',
  templateUrl: './unete.component.html',
  styleUrls: ['./unete.component.scss']
})
export class UneteComponent implements OnInit {
  title: string;
  fontSize1: string;
  lineWeight: string;
  color: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Únete';
    this.fontSize1 = '30px';
    this.lineWeight = '17px';
    this.color = 'green';

  }

}
