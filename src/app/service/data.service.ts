import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { DataModel } from '../model/data-model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient ) { }

  public dataModel: DataModel[] = [];

  private dataModelSubject = new BehaviorSubject<DataModel[]>(this.dataModel);
  currentDataModel = this.dataModelSubject.asObservable();

  updateDataModel(data: DataModel[]) {
    this.dataModelSubject.next(data);
    localStorage.setItem("dataModel", JSON.stringify(this.dataModel));
  }

  public getData(username:String)
  {
    return this.http.get<DataModel[]>( "https://modbus-back.herokuapp.com/data").subscribe( data => {
        this.updateDataModel(data);
        this.dataModel = data;
        this.dataModel.forEach( element  => {
          console.log(element.espTemperature);
        });
      });
  }

}
