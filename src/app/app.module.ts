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
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './charts-view/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartsViewComponent } from './charts-view/charts-view.component';
import { OveralsComponent } from './overals/overals.component';
import { ChartCurrentComponent } from './charts-view/chart-current/chart-current.component';
import { ChartLoadComponent } from './charts-view/chart-load/chart-load.component';

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    NavbarComponent,
    OptionsDialogComponent,
    ChartComponent,
    ChartsViewComponent,
    OveralsComponent,
    ChartCurrentComponent,
    ChartLoadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
