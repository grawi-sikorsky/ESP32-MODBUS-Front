import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { DataModel, SetupModel } from '../model/data-model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient ) { }

  public liveDataModel: DataModel = {};
  public dataModel: DataModel[] = [];
  public setupModel: SetupModel = {};

  private liveDataModelSubject = new BehaviorSubject<DataModel>(this.liveDataModel);
  currentLiveDataModel = this.liveDataModelSubject.asObservable();

  private dataModelSubject = new BehaviorSubject<DataModel[]>(this.dataModel);
  currentDataModel = this.dataModelSubject.asObservable();

  private setupModelSubject = new BehaviorSubject<SetupModel>(this.setupModel);
  currentSetupModel = this.setupModelSubject.asObservable();

  updateLiveDataModel(data: DataModel) {
    this.liveDataModelSubject.next(data);
    localStorage.setItem("liveDataModel", JSON.stringify(this.liveDataModel));
  }

  updateDataModel(data: DataModel[]) {
    this.dataModelSubject.next(data);
    localStorage.setItem("dataModel", JSON.stringify(this.dataModel));
  }

  updateSetupModel(setup: SetupModel) {
    this.setupModelSubject.next(setup);
    localStorage.setItem("setupModel", JSON.stringify(this.setupModel));
  }

  public getLiveData(username:String)
  {
    return this.http.get<DataModel>( "https://modbus-back.herokuapp.com/live").subscribe( data => {
        this.updateLiveDataModel(data);
        this.liveDataModel = data;
      });
  }

  public getData(username:String)
  {
    return this.http.get<DataModel[]>( "https://modbus-back.herokuapp.com/data").subscribe( data => {
        this.updateDataModel(data);
        this.dataModel = data;
        this.dataModel.forEach( element  => {

        });
      });
  }

  public getSetup(username:String)
  {
    return this.http.get<SetupModel>( "https://modbus-back.herokuapp.com/setup/modbus1").subscribe( data => {
        this.updateSetupModel(data);
        this.setupModel = data;
      });
  }

  public postSetup(){
    console.log(this.setupModel);
    return this.http.post<SetupModel>( "https://modbus-back.herokuapp.com/setup", this.setupModel ).subscribe();
  }
}
