import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationService } from 'src/app/service/operation.service';
import { OrdreService } from 'src/app/service/ordre.service';
import { Ordre } from './../../models/ordre';
@Component({
  selector: 'app-ajouter-ordres-vente',
  templateUrl: './ajouter-ordres-vente.component.html',
  styleUrls: ['./ajouter-ordres-vente.component.css']
})
export class AjouterOrdresVenteComponent implements OnInit {
  idOperation: any
  Operation: any
  addOrderVenteForm: FormGroup
  ordre: Ordre;
  constructor(private activatedRouted: ActivatedRoute, private operationService: OperationService, private formBuilder: FormBuilder, private orderService: OrdreService, private router: Router) {
    this.ordre = new Ordre();
  }

  ngOnInit() {
    this.idOperation = this.activatedRouted.snapshot.paramMap.get('id')
    this.operationService.getOperationById(this.idOperation).subscribe((operation) => {
      this.Operation = operation
      console.log('here operation ', this.Operation);

    })
    this.addOrderVenteForm = this.formBuilder.group({

      price: [''],
      feeamount: [''],

    });
  }
  addOrderVente() {
    this.ordre.Code_isin_opt = this.Operation.Code_isin_opt
    this.ordre.security = this.Operation.security
    this.ordre.tradingDate = this.Operation.tradingDate
    this.ordre.valueDate = this.Operation.valueDate
    this.ordre.sens = this.Operation.sens
    this.ordre.currency = this.Operation.currency
    this.ordre.status = this.Operation.status
    this.ordre.quanti = this.Operation.quanti
    this.ordre.mntbrt = (this.ordre.price * this.Operation.quanti)
    this.ordre.MntNet = (this.ordre.mntbrt + this.ordre.feeamount)
    this.ordre.client = this.Operation.client
    this.ordre.test = false
    this.ordre.Valeur = this.Operation.Valeur
    this.ordre.etat = 'vente'
    this.ordre.secaccount = this.Operation.secaccount
    this.ordre.cashaccount = this.Operation.cashaccount
    this.orderService.addOrdre(this.ordre).subscribe((data) => {
      console.log('here add order de vente ', data);


    })
    this.router.navigate(['dashboard-client'])

  }

}
