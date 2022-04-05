import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  covidStats: Object[] = []
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.callApi().subscribe((obj) => {
      this.covidStats = Object.values(obj).flat();
      console.log(this.covidStats[0])
    });
  }

}
