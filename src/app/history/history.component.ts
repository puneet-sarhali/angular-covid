import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { InputData } from '../inputData'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyData!: [{"key": string, "data": InputData}]
  displayData: any = []
  @Input() isDataSaved: {"key": string, "data": InputData} = {
    "key": "error",
    "data": {
      cumuDeaths: true,
      cumuRecovered: true,
      cumuCases: true,
      endDate: "",
      federal: true,
      newCases: true,
      newDeaths: true,
      newRecovered: true,
      provincial: true,
      regional: true,
      startDate: ""
  }
  };

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getAllData().subscribe((obj) => {
      this.historyData = obj;
      this.tranformData(this.historyData)
    })
  }

  ngOnChanges(){
    if(this.isDataSaved != null){
      this.transformDataHelper(this.isDataSaved)
    }
    
  }

  onDelete(key:string){
    this.ds.deleteData(key).subscribe((e)=>{
      this.displayData = this.displayData.filter((obj:any)=> obj.key != key)
    })
  }


  private tranformData(data: [{"key": string, "data": InputData}]){
    data.forEach((obj)=>{
      this.transformDataHelper(obj)
    })
  }

  transformDataHelper(obj: {"key": string, "data": InputData}){
    const stats = []
    if(obj.data.cumuCases) stats.push("Cumulative Cases")
    if(obj.data.newCases) stats.push("New Cases")
    if(obj.data.cumuRecovered) stats.push("Cumulative Recovered")
    if(obj.data.newRecovered) stats.push("New Recovered")
    if(obj.data.newDeaths) stats.push("New Deaths")
    if(obj.data.cumuDeaths) stats.push("Cumulative Deaths")
    const location = []
    if(obj.data.provincial) location.push("Provincial")
    if(obj.data.federal) location.push("Federal")
    if(obj.data.regional) location.push("Regional")

    let range = obj.data.startDate

    if(obj.data.endDate != ""){
      range = range + " to " + obj.data.endDate;
    }

    const newObj = {
      "key": obj.key,
      "time": new Date(Number(obj.key)).toUTCString(),
      "stats": stats,
      "location": location,
      "range": range
    }

    this.displayData.push(newObj)
  }



}
