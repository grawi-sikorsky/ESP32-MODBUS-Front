import { Component, OnInit } from '@angular/core';
import { DataModel } from '../model/data-model';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
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
      if (data.length > 0) {
        this.chartRawData = data;

        this.chartRawData?.forEach(element => {
          this.ldataList.push(Number(element.batVoltage!));
          this.ldataList2.push(Number(element.batRemainingPercent!));
          this.ldataLabels.push(formatDate(element.recordTime!, 'HH:mm:ss dd/MM/yyyy', 'en-US'));
        });

        this.ldataSet.push({
          data: this.ldataList,
          label: "Battery voltage",
          backgroundColor: 'rgba(148,159,177,0.5)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        })

        this.ldataSet2.push({
          data: this.ldataList2,
          label: "Battery a",
          backgroundColor: 'rgba(148,159,177,0.5)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: false,
        })
      }
      console.warn(this.hotspotData);
    })
  }
  public lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [300, 500, 900, 101, 506, 895, 340], label: 'Series B' },
    { data: [65, 519, 800, 111, 786, 305, 40], label: 'Series C' },
  ];
  chartRawData?: DataModel[] = [];
  ldataList: number[] = [];
  ldataList2: number[] = [];
  ldataLabels: string[] = [];
  ldataSet: any = [];
  ldataSet2: any = [];

  hotspotData: ChartData<'line'> = {
    labels: this.ldataLabels,
    datasets: [this.ldataSet],
  };

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Voltage Chart',
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
