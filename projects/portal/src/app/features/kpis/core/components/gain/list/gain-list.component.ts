import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gain-list',
  templateUrl: './gain-list.component.html',
  styleUrls: ['./gain-list.component.scss']
})
export class GainListComponent implements OnInit {

  @Input() rows: string;
  @Input() totalRecords: string;
  @Input() pageLinkSize: string;

  constructor() { }

  ngOnInit() {
    this.rows = '15';
    this.totalRecords = '90';
    this.pageLinkSize = '3';
  }

}
