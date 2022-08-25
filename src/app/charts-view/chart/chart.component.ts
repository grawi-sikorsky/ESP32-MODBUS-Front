import { Component, OnInit, ViewChild } from '@angular/core';
import { DataModel } from '../../model/data-model';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { DatePipe, formatDate } from '@angular/common';
import { DataService } from '../../service/data.service';
import { FormControl } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(public dataService: DataService) { }

  @ViewChild( BaseChartDirective ) chart?: BaseChartDirective;

  rangeSelection: string = "24h";

  ngOnInit(): void {
    this.dataService.currentDataModel.subscribe(data => {
      
      this.dataListBat.length = 0;
      this.dataListLoad.length = 0;
      this.dataListPV.length = 0;
      this.ldataLabels.length = 0;

      if (data.length > 0) {
        let i = 0;
        this.chartRawData = data;
        
        this.chartRawData?.forEach(element => {
          if(this.rangeSelection === '24h' && i == 1){
            this.dataListBat.push(Number(element.batVoltage!));
            this.dataListPV.push(Number(element.pvVoltage!));
            this.dataListLoad.push(Number(element.loadVoltage!));
            this.ldataLabels.push(formatDate(element.recordTime!, 'HH:mm:ss dd/MM/yy', 'en-US'));
            i = 0;
          }
          if(this.rangeSelection === '30d' && i == 6){
            this.dataListBat.push(Number(element.batVoltage!));
            this.dataListPV.push(Number(element.pvVoltage!));
            this.dataListLoad.push(Number(element.loadVoltage!));
            this.ldataLabels.push(formatDate(element.recordTime!, 'HH:mm:ss dd/MM/yy', 'en-US'));
            i = 0;
          }
          if(this.rangeSelection === 'all' && i == 12){
            this.dataListBat.push(Number(element.batVoltage!));
            this.dataListPV.push(Number(element.pvVoltage!));
            this.dataListLoad.push(Number(element.loadVoltage!));
            this.ldataLabels.push(formatDate(element.recordTime!, 'HH:mm:ss dd/MM/yy', 'en-US'));
            i = 0;
          }
          i++;

        });



        this.ldataSet.push({
          data: this.dataListBat,
          label: "Battery voltage",
          yAxisID: 'yload',
          backgroundColor: 'rgba(120,220,140,0.5)',
          borderColor: 'rgba(120,220,140,1)',
          pointBackgroundColor: 'rgba(120,220,140,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(120,220,140,0.8)',
          fill: false,
          lineTension: 0.2,
        })

        this.ldataSet.push({
          data: this.dataListPV,
          label: "PV voltage",
          yAxisID: 'yload',
          backgroundColor: 'rgba(202,159,177,0.5)',
          borderColor: 'rgba(220,159,177,1)',
          pointBackgroundColor: 'rgba(220,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(202,159,177,0.8)',
          fill: false,
          lineTension: 0.2,
        })

        this.ldataSet.push({
          data: this.dataListLoad,
          label: "Load voltage",
          yAxisID: 'yload',
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

  ref(range:string){
    //let dateNow = new Date().toISOString(); formatDate(dateNow,"MMM d, y H:mm:ss'", 'pl_PL');
    if(range == '24h'){
      this.dataService.getDataInRange("?start=2022-08-25T06:30:30Z&end=2022-08-25T11:59:32Z" );
    }
    else if(range == '30d'){
      this.dataService.getDataInRange("?start=2022-08-23T06:30:30Z&end=2022-08-25T11:59:32Z" );
    }
    else if( range == 'all'){
      this.dataService.getDataInRange("?start=2022-08-20T06:30:30Z&end=2022-08-25T11:59:32Z" );
    }
    
    this.dataService.currentDataModel.subscribe(data => {
      this.chart?.chart?.update();
    })
    this.ldataSet = this.ldataSet.slice();
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
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: 'Voltage Chart',
      },
      tooltip:{
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      yAxes: {
        
        position: 'left',
        type: 'linear',
        ticks: {
          callback: value => 2 % 400 ? null : value
        }
        // scaleLabel: {
        //   display: true,
        //   labelString: 'Claims Count'
        // }
      },
    }
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
