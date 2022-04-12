import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Data } from '../app/data'
import { InputData } from '../app/inputData'


@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }
  callApi(url: string){
    return this.http.get<Data[]>(url);
  }
  postData(data: InputData){
    const url = "https://218.selfip.net/apps/4iWK6H3Pra/collections/covidData/documents/"
    const body = {
      "key": new Date().getTime(),
      "data": data,
    }
    return this.http.post(url, body);
  }
  deleteData(key: string){
    const url = `https://218.selfip.net/apps/4iWK6H3Pra/collections/covidData/documents/${key}/`
    return this.http.delete(url)
  }
  getData(key: string){
    const url = `https://218.selfip.net/apps/4iWK6H3Pra/collections/covidData/documents/${key}/`
    return this.http.get(url)
  }
  getAllData(){
    const url = "https://218.selfip.net/apps/4iWK6H3Pra/collections/covidData/documents/"
    return this.http.get<[{"key": string, "data": InputData}]>(url)
  }



}

