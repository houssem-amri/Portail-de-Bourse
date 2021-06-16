import { Component, OnInit } from '@angular/core';
import { OrdreService } from 'src/app/service/ordre.service';
import { Ordre } from './../../models/ordre';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentVenteComponent } from '../modal-content-vente/modal-content-vente.component';
@Component({
  selector: 'app-ordres-vente',
  templateUrl: './ordres-vente.component.html',
  styleUrls: ['./ordres-vente.component.css']
})
export class OrdresVenteComponent implements OnInit {

  ordres: Ordre[];


  ordre: any;

  constructor(private ordreService: OrdreService, public modalService: NgbModal) { }

  ngOnInit() {
    this.getAllOrdres();
  }
  getAllOrdres() {
    this.ordreService.getAllOrdreVente().subscribe((data) => {
      this.ordres = data;

      console.log('here ordres ', this.ordres);


    });
  }

  openModal(id) {
    this.ordreService.getOrdreById(id).subscribe((res) => {
      const modalRef = this.modalService.open(ModalContentVenteComponent);
      modalRef.componentInstance.ordre = res;
      modalRef.result.then((result) => {
        if (result) {
          console.log(result);
        }
      });
    });

    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // })
  }

}
