import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-modbussetup-dialog',
  templateUrl: './modbussetup-dialog.component.html',
  styleUrls: ['./modbussetup-dialog.component.css']
})
export class ModbussetupDialogComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.currentSetupModel.subscribe(data => {
    })
    //this.dataService.getSetup("cokolwiek");
  }

  onSaveSettings(){
    this.dataService.updateSetupModel(this.dataService.setupModel);
    this.dataService.postSetup();
    
  }

}
