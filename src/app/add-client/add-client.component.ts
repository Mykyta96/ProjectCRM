import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from '../service/clienti.service';
import { Clients } from '../interface/clients';
import { IComuni } from '../interface/icomuni';
import { Province } from '../interface/province';
import { ComuneService } from '../service/comune.service';
import { ProvinceService } from '../service/province.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  /*
    In questo componente abbiamo messo logica per aggiungere clienti;
        CHIAMATE PRESENTI:
          -Chiamata per prendere array di comuni,
          -Chiamata per prendere array di province,   -------------PRIMA ABBIAMO FATTO LA CHIAMATA DAGLI API NELL ClientService------------
          -Chiamata per prendere array di Tipi Clienti
          -Dati da aggiungere devo essere come nell API >>>>>>>> DA RIGA 32 A RIGA 72 (PER IL MOMENTO)
  */


  comune: IComuni[] = [];
  province: Province[] = [];
  tipoClient: string[] = [];

  newClient: Clients = {
    ragioneSociale: "",
    partitaIva: "",
    tipoCliente: "",
    email: "",
    pec: "",
    telefono: "",
    nomeContatto: "",
    cognomeContatto: "",
    telefonoContatto: "",
    emailContatto: "",
    indirizzoSedeOperativa: {
        via: "",
        civico: "",
        cap: "",
        localita: "",
        comune: {
            id: 1,
            nome: "",
            provincia: {
                id: 1,
                nome: "",
                sigla: ""
            }
        }
    },
    indirizzoSedeLegale: {
        via: "",
        civico: "",
        cap: "",
        localita: "",
        comune: {
            id: 1,
            nome: "",
            provincia: {
                id: 1,
                nome: "",
                sigla: ""
            }
        }
    },
    dataInserimento: "",
    dataUltimoContatto: ""

  }

  constructor(
    private clientiService: ClientiService,
    private router: Router,
    private route: ActivatedRoute,
    private provinceService: ProvinceService,
     private comuneService: ComuneService
    ) {

  }

  ngOnInit(): void {

    this.getTipoClient();
    this.getProvince();
    this.getComuni();

  }

  create(){
    this.clientiService.createClient(this.newClient)
      .subscribe(response => {
        this.newClient = response;
        // console.log(response);
        this.router.navigate(['client/list'])
      })
  }

  getTipoClient(){
    this.clientiService.getTipoClient()
      .subscribe(response => this.tipoClient = response)
  }

  getComuni(){
    this.comuneService.getAllComune()
      .subscribe(response => this.comune = response.content)
  }

  getProvince(){
    this.provinceService.getAllProvince()
      .subscribe(response => this.province = response.content)
  }




}
