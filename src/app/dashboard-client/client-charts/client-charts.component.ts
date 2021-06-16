import { Component, OnInit } from '@angular/core';
import { ApexChartService } from 'src/app/dashboard/charts/apex-chart/apex-chart.service';
import { OperationService } from 'src/app/service/operation.service';
export class ChartDB {
  public static area1CAC = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    colors: ['#ffa21d', '#ff5252'],
    series: [
      {
        name: "MntNet d'achat",
        data: []
      },
      {
        name: "MntNet de vente",
        data: []
      }
    ],

    xaxis: {
      type: 'tradingDate',
      categories: [

      ]
    },
    tooltip: {
      x: {
        format: ' '
      }
    }
  };
}
@Component({
  selector: 'app-client-charts',
  templateUrl: './client-charts.component.html',
  styleUrls: ['./client-charts.component.css']
})
export class ClientChartsComponent implements OnInit {
  public chartDB: any;
  clientId: any
  dataSerie1: any
  dataSerie2: any

  constructor(public apexEvent: ApexChartService, private operationService: OperationService) {
    this.chartDB = ChartDB;
  }

  ngOnInit() {
    this.clientId = JSON.parse(localStorage.getItem('connectedUserDorra'))
    console.log(this.clientId);

    this.operationService.getOperationByUserIdAndEtatAchat(this.clientId).subscribe((dataSerie1) => {
      this.dataSerie1 = dataSerie1
      console.log('here data dataSerie1', this.dataSerie1);
      for (let idx = 0; idx < this.dataSerie1.length; idx++) {

        this.chartDB.area1CAC.series[0].data.push(this.dataSerie1[idx].MntNet);


      }

    })
    this.operationService.getOperationByUserIdAndEtatVente(this.clientId).subscribe((dataSerie2) => {
      this.dataSerie2 = dataSerie2
      console.log('here data dataSerie2', this.dataSerie2);
      for (let idx = 0; idx < this.dataSerie2.length; idx++) {

        this.chartDB.area1CAC.series[1].data.push(this.dataSerie2[idx].MntNet);

      }
    })
  }

}
