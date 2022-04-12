import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';
import { InputData } from '../inputData'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  covidStats: Data[] = []
  d:any;
  inputData: Object = {};
  @Input() formData!: InputData;
  @Output() outDataSaved = new EventEmitter()

  constructor(private ds:DataService ){ }

  ngOnInit(): void {
    this.getApiData();
  }
  ngOnChanges() {
    this.getApiData();
  }

  getApiData(){
    if(this.formData == null){
      this.formData = {
        cumuDeaths: true,
        cumuRecovered: false,
        cumuCases: true,
        endDate: "",
        federal: false,
        newCases: true,
        newDeaths: true,
        newRecovered: false,
        provincial: true,
        regional: false,
        startDate: ""
      }; 
    }
    
    const startDate = this.formData.startDate;
    const endDate = this.formData.endDate;

    let url = `https://api.opencovid.ca/summary?loc=prov&after=${startDate}&before=${endDate}`

    this.ds.callApi(url).subscribe((data)=>{
      this.d = data
      this.covidStats = this.d.summary
    })
  }

  onSaveData(){
    if(this.formData == null){
      this.formData = {
        cumuDeaths: true,
        cumuRecovered: false,
        cumuCases: true,
        endDate: "",
        federal: false,
        newCases: true,
        newDeaths: true,
        newRecovered: false,
        provincial: true,
        regional: false,
        startDate: ""
      }; 
    }
    this.ds.postData(this.formData).subscribe((result)=>{
      this.outDataSaved.emit(result)
    })
  }

}
