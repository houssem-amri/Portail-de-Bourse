import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CashaccountService } from 'src/app/service/cashaccount.service';
import { PositionespeceService } from 'src/app/service/positionespece.service';

@Component({
	selector: 'app-compte-espece',
	templateUrl: './compte-espece.component.html',
	styleUrls: ['./compte-espece.component.css']
})
export class CompteEspeceComponent implements OnInit {
	cashaccount: any;
	id: any;
	Positionespece: any;
	constructor(private cashaccountService: CashaccountService, private PositionespeceService: PositionespeceService) { }

	ngOnInit() {
		this.id = JSON.parse(localStorage.getItem('connectedUserDorra'));
		this.cashaccountService.getCashaccountByUserId(this.id).subscribe((cashaccount) => {
			this.cashaccount = cashaccount[0];
			console.log('here cashaccount client', this.cashaccount);
			this.PositionespeceService.getPositionespeceByCashaccountId(this.cashaccount.id).subscribe((Positionespece) => {
				this.Positionespece = Positionespece
				console.log('here Positionespece client', this.Positionespece);

			})
		});
	}
}
