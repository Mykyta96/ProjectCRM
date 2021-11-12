import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fature} from '../interface/fature';
import { FatureNew } from '../interface/fature-new';
import { ClientiService } from '../service/clienti.service';
import { FatureService } from '../service/fature.service';

@Component({
  selector: 'app-info-fatture',
  templateUrl: './info-fatture.component.html',
  styleUrls: ['./info-fatture.component.css']
})
export class InfoFattureComponent implements OnInit {

  fatturaInfo!: Fature;

//   newFattura: Fature = {

//     id: 0,
//     data: "",
//     numero: 0,
//     anno: 0,
//     importo: 0,
//     stato: {
//         id: 2,
//         nome: "NON PAGATA"
//     },
//     cliente: {
//         id: 0,
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

newFattura: FatureNew = {

        data:"2019-07-31T16:09:43.763+00:00",
        numero:0,
        anno:0,
        importo:0,
        stato:{
          id: 1,
          nome: "PAGATA"
      },
      cliente:{
        id: 0
      }
}



  constructor(private fatureService: FatureService, private clientiService: ClientiService, private router: Router, private route: ActivatedRoute) { }


    /*
      SU QUESTA PAGGINA STIAMO PASSANDO PARAMETRI DI UN CLIENTE PER ID, IN QUESTO MODO GLI POSSIAMO FAR USCIRE SULLA PAGGINA E GESTIRE I DATI
    */




  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id){
        this.clientiService.getFattura(params.id)
          .subscribe(response => {
            this.fatturaInfo = response
            // console.log(this.fatturaInfo)
          }
            )
      }
    })
  }


  createFatture(){
    this.clientiService.createFattura(this.newFattura)
      .subscribe(response => {
        this.newFattura = response;
        console.log(response)
        this.router.navigate(['client', 'fature']);
      })
  }


}
