import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() backGround: string;
  inputStyle: {};

  constructor() {
    this.backGround = '#ffffff';
  }

  ngOnInit() {
    this.inputStyle = {
      backgroundColor: this.backGround
    };
  }

}
