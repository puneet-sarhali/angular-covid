import { Component, OnInit,  } from '@angular/core';
import { InputData } from './inputData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-stats';
  formData!: InputData;
  isDataSaved!: {"key": string, "data": InputData};
  constructor (){}
  

  getFormData(data: InputData){
    this.formData = data;
  }

  getDataSaved(data:any){
    this.isDataSaved = data;
    console.log(this.isDataSaved)
  }



}


