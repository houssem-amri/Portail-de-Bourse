import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Positionespece } from 'src/app/models/Positionespece';
import { CashaccountService } from 'src/app/service/cashaccount.service';
import { ClientService } from 'src/app/service/client.service';
import { OperationService } from 'src/app/service/operation.service';
import { OrdreService } from 'src/app/service/ordre.service';
import { PositionTitreService } from 'src/app/service/position-titre.service';
import { PositionespeceService } from 'src/app/service/positionespece.service';


@Component({
  selector: 'app-modal-content-vente',
  templateUrl: './modal-content-vente.component.html',
  styleUrls: ['./modal-content-vente.component.css']
})
export class ModalContentVenteComponent implements OnInit {
  OperationForm: FormGroup;
  client: any;
  Cashaccount: any;

  Positionespece: Positionespece;
  curdate = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString() + '-' + new Date().getDate().toString();

  @Input() public ordre;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal,
    private operationService: OperationService,
    private ordreService: OrdreService,
    private formBuilder: FormBuilder,
    private router: Router,
    private clientSevice: ClientService,
    private positionTitreService: PositionTitreService,
    private PositionespeceService: PositionespeceService,
    private CashaccountService: CashaccountService,) {
    this.Positionespece = new Positionespece()
  }

  ngOnInit() {
    console.log('here order modal ', this.ordre);
    this.CashaccountService.getCashaccountById(this.ordre.cashaccount).subscribe((cashaccount) => {
      this.Cashaccount = cashaccount
      console.log('here Cashaccount by id', this.Cashaccount.solde);

    })

    this.clientSevice.getClientById(this.ordre.client).subscribe((client) => {
      this.client = client
      console.log('here client', this.client);


    })
    this.OperationForm = this.formBuilder.group({
      Code_isin_opt: [''],
      security: [''],
      tradingDate: [''],
      valueDate: [''],
      sens: [''],
      currency: [''],
      status: [''],
      quanti: [''],
      price: [''],
      feeamount: [''],


    });
  }
  passBack() {
    this.passEntry.emit(this.ordre);
    this.activeModal.close(this.ordre);
  }
  addOperationVente(operation) {

    operation.client = this.ordre.client;
    operation.test = true;
    operation.Valeur = this.ordre.Valeur;
    operation.etat = this.ordre.etat;
    operation.mntbrt = (operation.price * operation.quanti);
    operation.MntNet = (operation.mntbrt + operation.feeamount);
    operation.secaccount = this.ordre.secaccount;
    operation.cashaccount = this.ordre.cashaccount;

    this.operationService.addOperation(operation).subscribe((data) => {
      console.log('operation added', data);

      this.Positionespece.positiondate = this.curdate
      this.Positionespece.enddate = data.tradingDate
      this.Positionespece.currency = data.currency
      this.Positionespece.statuts = data.status
      this.Positionespece.amount = data.MntNet
      this.Positionespece.cashaccount = data.cashaccount
      this.PositionespeceService.addPositionespece(this.Positionespece).subscribe((Positionespece) => {
        console.log(' Positionespece added', Positionespece);
      })
      this.Cashaccount.solde = (this.Cashaccount.solde + data.MntNet)
      this.CashaccountService.updateCashaccount(this.Cashaccount).subscribe((update) => {
        console.log('cash account updat ', update);

      })

      this.ordre.test = true;
      this.ordreService.updateOrdre(this.ordre).subscribe((rep) => {
        console.log('ordre update', rep);

        this.passBack();
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['orders-de-Vente']);
        });
      });
    });


  }
}
