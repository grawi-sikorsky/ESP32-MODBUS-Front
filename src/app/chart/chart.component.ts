import { Component, OnInit } from '@angular/core';
import { DataModel } from '../model/data-model';
import { ChartData, ChartOptions } from 'chart.js';
import { formatDate } from '@angular/common';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentDataModel.subscribe(data => {
      this.chartRawData = data;

      console.warn(data);
      console.warn(this.chartRawData);

      this.chartRawData?.reverse().forEach(element => {
        this.ldataList.push(element.batVoltage!);
        this.ldataLabels.push(formatDate(element.recordTime!, 'dd/MM/yyyy', 'en-US',));
      });

      this.ldataSet.push({
        data: this.ldataList,
        label: "Taki czort",
        backgroundColor: 'rgba(148,159,177,0.5)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      })

    })

}

chartRawData ?: DataModel[] = [];
ldataList: string[] = [];
ldataLabels: string[] = [];
ldataSet: any = [];

hotspotData: ChartData<'line'> = {
  labels: this.ldataLabels,
  datasets: this.ldataSet,
};

lineChartLegend = true;
lineChartPlugins = [];
lineChartType = 'line';
chartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Mining rewards',
    },
  },
};

public chartColors: Array<any> = [
  { // first color
    backgroundColor: 'rgba(225,10,24,0.2)',
    borderColor: 'rgba(225,10,24,0.2)',
    pointBackgroundColor: 'rgba(225,10,24,0.2)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(225,10,24,0.2)'
  },
  { // second color
    backgroundColor: 'rgba(225,10,24,0.2)',
    borderColor: 'rgba(225,10,24,0.2)',
    pointBackgroundColor: 'rgba(225,10,24,0.2)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(225,10,24,0.2)'
  }];


}
