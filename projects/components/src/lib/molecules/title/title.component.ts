import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  @Input() fontSize: string;
  @Input() lineWeight: string;
  @Input() color: string;
  inputStyle: {};

  constructor() {
    this.fontSize = '18px';
    this.lineWeight = '22px';
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
