import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retention-list',
  templateUrl: './retention-list.component.html',
  styleUrls: ['./retention-list.component.scss']
})
export class RetentionListComponent implements OnInit {

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
