import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-options-dialog',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.css']
})
export class OptionsDialogComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.currentDataModel.subscribe(data => {
      console.warn(data);
    })
    this.dataService.getSetup("cokolwiek");
  }

  onSaveSettings(){
    this.dataService.updateSetupModel(this.dataService.setupModel);
    this.dataService.postSetup();
    
  }

}
