import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { DataModel } from 'src/app/model/data-model';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-chart-load',
  templateUrl: './chart-load.component.html',
  styleUrls: ['./chart-load.component.css']
})
export class ChartLoadComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {

    this.dataService.currentDataModel.subscribe(data => {
      if (data.length > 0) {
        this.chartRawData = data;

        this.chartRawData?.forEach(element => {
          this.dataListBat.push(Number(element.batChargingPower!));
          this.dataListPV.push(Number(element.pvPower!));
          this.dataListLoad.push(Number(element.loadPower!));
          this.ldataLabels.push(formatDate(element.recordTime!, 'HH:mm:ss dd/MM/yyyy', 'en-US'));
        });

        this.ldataSet.push({
          data: this.dataListBat,
          label: "Battery power",
          backgroundColor: 'rgba(120,220,140,0.5)',
          borderColor: 'rgba(120,220,140,1)',
          pointBackgroundColor: 'rgba(120,220,140,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(120,220,140,0.8)',
          fill: false,
          lineTension: 0.5,
        })

        this.ldataSet.push({
          data: this.dataListPV,
          label: "PV power",
          backgroundColor: 'rgba(202,159,177,0.5)',
          borderColor: 'rgba(220,159,177,1)',
          pointBackgroundColor: 'rgba(220,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(202,159,177,0.8)',
          fill: false,
          lineTension: 0.5,
        })

        this.ldataSet.push({
          data: this.dataListLoad,
          label: "Load power",
          backgroundColor: 'rgba(100,159,220,0.5)',
          borderColor: 'rgba(100,159,220,1)',
          pointBackgroundColor: 'rgba(100,159,220,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(100,159,220,0.8)',
          fill: false,
          lineTension: 0.5,
        })
      }
    })
  }

  chartRawData?: DataModel[] = [];
  dataListBat: number[] = [];
  dataListPV: number[] = [];
  dataListLoad: number[] = [];
  ldataLabels: string[] = [];
  ldataSet: any = [];

  loadChartData: ChartData<'line'> = {
    labels: this.ldataLabels,
    datasets: this.ldataSet,
  };

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: 'Power Chart',
      },
      tooltip:{
        mode: 'index',
        intersect: false,
      }
    },
  }

}
