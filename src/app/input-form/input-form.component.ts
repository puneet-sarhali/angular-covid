import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { InputData } from '../inputData'

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  @Output() formData = new EventEmitter();

  form: FormGroup = new FormGroup({});
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      newCases: new FormControl(true),
      cumuCases: new FormControl(true),
      newDeaths: new FormControl(true),
      cumuDeaths: new FormControl(true),
      newRecovered: new FormControl(false),
      cumuRecovered: new FormControl(false),
      federal: new FormControl(false),
      provincial: new FormControl(true),
      regional: new FormControl(false),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
    })
  }

  onSubmit(value:any){
    this.formData.emit(value)
  }

  
  // onDelete(){
  //   for(let i = 0; i < 12; i++){
  //     this.ds.deleteData(String(i)).subscribe((result)=>{
  //       console.log(result)
  //     })
  //   }
  // }


}
