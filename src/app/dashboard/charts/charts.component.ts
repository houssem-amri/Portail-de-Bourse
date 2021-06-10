import { Component, OnInit } from '@angular/core';
import { ApexChartService } from './apex-chart/apex-chart.service';
import { ChartDB } from './../../shared/chart-data';

@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: [ './charts.component.css' ]
})
export class ChartsComponent implements OnInit {
	public chartDB: any;
	constructor(public apexEvent: ApexChartService) {
		this.chartDB = ChartDB;
	}

	ngOnInit() {}
}
