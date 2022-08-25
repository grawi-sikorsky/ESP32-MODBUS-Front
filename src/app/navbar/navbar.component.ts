import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OptionsDialogComponent } from '../options-dialog/options-dialog.component';
import { DataService } from '../service/data.service';
import { ModbussetupDialogComponent } from '../modbussetup-dialog/modbussetup-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dataService:DataService, public setupDialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.currentDataModel.subscribe(data => {
    })
  }

  public onSettingsClick(): void {
    const dialogRef = this.setupDialog.open(OptionsDialogComponent, {width:"35%"});
    dialogRef.afterClosed().subscribe(data=>{
      console.log("Setup Dialog zamkniety");
    })
  }

  public onMpptSettingsClick(): void {
    const dialogRef = this.setupDialog.open(ModbussetupDialogComponent, {width:"35%"});
    dialogRef.afterClosed().subscribe(data=>{
      console.log("MPPT Setup Dialog zamkniety");
    })
  }
}
