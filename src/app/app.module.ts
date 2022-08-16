import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { DataService } from './service/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OptionsDialogComponent } from './options-dialog/options-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    NavbarComponent,
    OptionsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
