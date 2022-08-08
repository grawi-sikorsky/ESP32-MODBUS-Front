import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { DataModel } from '../model/data-model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient ) { }

  private modbusData = new Subject<DataModel>();
  currentModbusData = this.modbusData.asObservable();
  updateModbusData(data:DataModel) {
    this.modbusData.next(data);
  }

  public getData(username:String)
  {
    return this.http.get<DataModel>( "https://modbus-back.herokuapp.com/data").subscribe( data => {
        this.updateModbusData(data);
        console.log(data);
      });
  }

}
