import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-overals',
  templateUrl: './overals.component.html',
  styleUrls: ['./overals.component.css']
})
export class OveralsComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentDataModel.subscribe(data => {
      this.lastElement = this.dataService.dataModel[this.dataService.dataModel.length-1];
    })
  }

  lastElement:any;
  displayedColumns: string[] = ['genTotalToday', 'genTotalToday'];
}
