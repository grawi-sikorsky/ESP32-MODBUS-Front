import { Component, OnInit } from '@angular/core';
import { DataModel } from '../../model/data-model';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { formatDate } from '@angular/common';
import { DataService } from '../../service/data.service';

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
        let i = 0;
        this.chartRawData = data;
        
        this.chartRawData?.forEach(element => {
          if(i == 7){
            this.dataListBat.push(Number(element.batVoltage!));
            this.dataListPV.push(Number(element.pvVoltage!));
            this.dataListLoad.push(Number(element.loadVoltage!));
            this.ldataLabels.push(formatDate(element.recordTime!, 'HH:mm:ss dd/MM/yyyy', 'en-US'));
            i = 0;
          }
          i++;

        });

        this.ldataSet.push({
          data: this.dataListBat,
          label: "Battery voltage",
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
          label: "PV voltage",
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
          label: "Load voltage",
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

  voltageChartData: ChartData<'line'> = {
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
        text: 'Voltage Chart',
      },
      tooltip:{
        mode: 'index',
        intersect: false,
      }
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
