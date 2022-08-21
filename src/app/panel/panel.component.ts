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
    this.dataService.currentDataModel.subscribe(data => {
      this.lastElement = this.dataService.dataModel[this.dataService.dataModel.length-1];
    })
  }

  lastElement:any;
  displayedColumns: string[] = ['genTotalToday', 'genTotalToday'];

}
