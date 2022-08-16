import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OptionsDialogComponent } from '../options-dialog/options-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public setupDialog:MatDialog) { }

  ngOnInit(): void {
  }

  public onSettingsClick(): void {
    const dialogRef = this.setupDialog.open(OptionsDialogComponent, {width:"85%", height:"85%" });
    dialogRef.afterClosed().subscribe(data=>{
      console.log("Setup Dialog zamkniety");
    })
  }
}
