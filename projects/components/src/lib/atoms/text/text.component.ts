import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {


  @Input() text: string;
  @Input() fontSize: string;
  @Input() lineWeight: string;
  @Input() color: string;
  @Input() size: string;
  inputStyle: {};

  constructor() {
    this.fontSize = '14px';
    this.lineWeight = '17px';
    this.color = '#2C2654';
  }

  ngOnInit() {
    this.inputStyle = {
      fontSize: this.fontSize,
      lineWeight: this.lineWeight,
      color: this.color
    };
  }

}
