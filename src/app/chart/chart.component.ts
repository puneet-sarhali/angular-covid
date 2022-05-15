import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  covidStats: Data[] = []
  d:any;
  visualData: any[] = [];

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    const url = "https://api.opencovid.ca/summary"
    this.ds.callApi(url).subscribe((data)=>{
      this.d = data;
      this.covidStats = this.d.data
      this.d.data.forEach((obj: { region: any; cases: any; }) => {
        this.visualData.push({
          "name": obj.region,
          "value": obj.cases
        })
      })
      this.visualData = [...this.visualData]
    })
  }


}
