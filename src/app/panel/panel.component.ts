import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getLiveData("whatever..");
    this.dataService.currentLiveDataModel.subscribe(data => {
      this.liveData = data;
    })
  }

  liveData:any;
  displayedColumns: string[] = ['genTotalToday', 'genTotalToday'];

}
