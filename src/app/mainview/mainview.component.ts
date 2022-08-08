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
      console.warn(data);
    })
    this.dataService.getData("cokolwiek");
  }

  buttonGET(){
    this.dataService.updateDataModel(this.dataService.dataModel);
    this.dataService.getData("cokolwiek");
  }

}
