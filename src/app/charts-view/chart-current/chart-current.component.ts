import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { DataModel } from 'src/app/model/data-model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-chart-current',
  templateUrl: './chart-current.component.html',
  styleUrls: ['./chart-current.component.css']
})
export class ChartCurrentComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentDataModel.subscribe(data => {
      if (data.length > 0) {
        let i = 0;
        this.chartRawData = data;

        this.chartRawData?.forEach(element => {
          if(i == 7){
            this.dataListBat.push(Number(element.batChargingCurrent!));
            this.dataListPV.push(Number(element.pvCurrent!));
            this.dataListLoad.push(Number(element.loadCurrent!));
            this.ldataLabels.push(formatDate(element.recordTime!, 'HH:mm:ss dd/MM/yyyy', 'en-US'));
            i=0;
          }
          i++;
        });

        this.ldataSet.push({
          data: this.dataListBat,
          label: "Battery current",
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
          label: "PV current",
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
          label: "Load current",
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

  currentChartData: ChartData<'line'> = {
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
        display: true,
        text: 'Current Chart',
      },
      tooltip:{
        mode: 'index',
        intersect: false,
      }
    },
  };

}
