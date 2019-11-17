import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gain-title',
  templateUrl: './gain-title.component.html',
  styleUrls: ['./gain-title.component.scss']
})
export class GainTitleComponent implements OnInit {

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
    this.title = 'Ciclo de Nuevas';
    this.size = 'xmd';
    this.color = '#000000';
  }

}
