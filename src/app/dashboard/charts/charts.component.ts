import { Component, OnInit } from '@angular/core';
import { ApexChartService } from './apex-chart/apex-chart.service';
// import { ChartDB } from './../../shared/chart-data';
import { ClientService } from 'src/app/service/client.service';
import { OperationService } from 'src/app/service/operation.service';
import { ValeurService } from 'src/app/service/valeur.service';
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
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
	public chartDB: any;
	nbrClient: any
	nbrValeur: any
	nbrOperation: any
	dataSerie1: any
	dataSerie2: any
	constructor(public apexEvent: ApexChartService, private clientService: ClientService, private operationService: OperationService, private valeurService: ValeurService) {
		this.chartDB = ChartDB;
	}



	ngOnInit() {
		this.operationService.getOperationByEtatAchat().subscribe((dataSerie1) => {
			this.dataSerie1 = dataSerie1
			console.log('here data dataSerie1', this.dataSerie1);
			for (let idx = 0; idx < this.dataSerie1.length; idx++) {

				this.chartDB.area1CAC.series[0].data.push(this.dataSerie1[idx].MntNet);
				// this.chartDB.area1CAC.xaxis.categories.push(this.dataSerie1[idx].tradingDate);

			}

		})
		this.operationService.getOperationByEtatVente().subscribe((dataSerie2) => {
			this.dataSerie2 = dataSerie2
			console.log('here data dataSerie2', this.dataSerie2);
			for (let idx = 0; idx < this.dataSerie2.length; idx++) {

				this.chartDB.area1CAC.series[1].data.push(this.dataSerie2[idx].MntNet);

			}

		})
		this.clientService.getAllClient().subscribe((client) => {
			this.nbrClient = client.length


		})
		this.operationService.getAllOperation().subscribe((operation) => {
			this.nbrOperation = operation.length


		})
		this.valeurService.getAllValeur().subscribe((client) => {
			this.nbrValeur = client.length


		})

	}
}
