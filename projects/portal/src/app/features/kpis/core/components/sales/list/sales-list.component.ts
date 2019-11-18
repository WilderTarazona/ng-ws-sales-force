import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

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
