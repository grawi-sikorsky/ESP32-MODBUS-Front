import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.currentDataModel.subscribe(data => {
    })
    this.dataService.getData("cokolwiek");
  }

  buttonGET(){
    this.dataService.getDataInRange("?start=2022-08-25T06:30:30Z&end=2022-08-25T09:59:32Z");
    this.dataService.updateDataModel(this.dataService.dataModel);
  }

}
