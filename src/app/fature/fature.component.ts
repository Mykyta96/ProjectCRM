import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Fature } from '../interface/fature';
import { FatureService } from '../service/fature.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

// interface Country {
//   id?: number;
//   name: string;
//   flag: string;
//   area: number;
//   population: number;
// }



@Component({
  selector: 'app-fature',
  templateUrl: './fature.component.html',
  styleUrls: ['./fature.component.css']
})
export class FatureComponent implements OnInit {

          /*
                QUA FACCIAMO CHIAMATA DELLA LISTA DELLE FATURE DEI CLIENTI, PRIMA ABBIAMO FATTO LA CHIAMATA DEGLI API NEL FatureService
                      METODI PRESENTI:
                        -ELIMINIAMO FATTURE,
                        -SELEZIONIAMO FATTURE,
                    -----------------------------
                      DA FINIRE DOPO CONSEGNA:
                        -DOBBIAMO SELEZIONARE IL CLIENTE PER ID PER AGGIUNGERE O MODIFICARE LE SUE FATTURE
                            BISOGNA CREARE UNA COMPONENTE A PARTE PER AGGIUNGERE LE FATTURE!!!
          */



  fattureList: Fature[] = [];
  // newFattura: Fature = {

  //     id: 0,
  //     data: "",
  //     numero: 0,
  //     anno: 0,
  //     importo: 0,
  //     stato: {
  //         id: 2,
  //         nome: ""
  //     },
  //     cliente: {
  //         id: 9,
  //         ragioneSociale: "",
  //         partitaIva: "",
  //         tipoCliente: "SRL",
  //         email: "",
  //         pec: "",
  //         telefono: "",
  //         nomeContatto: "",
  //         cognomeContatto: "",
  //         telefonoContatto: "",
  //         emailContatto: "",
  //         indirizzoSedeOperativa: {
  //           id: 0,
  //           via: "",
  //             civico: "",
  //             cap: "",
  //             localita: "",
  //             comune: {
  //                 id: 0,
  //                 nome: "",
  //                 provincia: {
  //                     id: 0,
  //                     nome: "",
  //                     sigla: ""
  //                 }
  //             }
  //         },
  //         indirizzoSedeLegale: {
  //             id: 0,
  //             via: "",
  //             civico: "",
  //             cap: "",
  //             localita: "",
  //             comune: {
  //                 id: 0,
  //                 nome: "",
  //                 provincia: {
  //                     id: 0,
  //                     nome: "",
  //                     sigla: ""
  //                 }
  //             }
  //         },
  //         dataInserimento: "",
  //         dataUltimoContatto: "",
  //         fatturatoAnnuale: 0

  // }



  // }


  constructor(private fatureService: FatureService, private router: Router, private route: ActivatedRoute) {
    // this.refreshCountries();

   }

  ngOnInit(): void {
    this.fatureService.getAllFatture()
      .subscribe(response => this.fattureList = response.content)
  }


  // createFatture(){
  //   this.fatureService.createFattura(this.newFattura)
  //     .subscribe(response => {
  //       this.newFattura = response;
  //       console.log(response)
  //     })
  // }


  removeFattura(id: any){
    this.fatureService.removeFattura(id).subscribe(response => {
      this.fattureList = this.fattureList.filter(elem => elem.id != id)
      console.log(response);
    })
  }

  selectFatture(fattureList: Fature): void{
    this.router.navigate(['client', fattureList.id, 'fatture']);
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!PAGINAZIONE
  // refreshCountries() {
  //   this.fattureList
  //     .map((client, i) => ({id: i + 1, ...client}))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!PAGINAZIONE

}
