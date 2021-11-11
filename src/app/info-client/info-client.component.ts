import { Clients } from '../interface/clients';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from '../service/clienti.service';
import { ComuneService } from '../service/comune.service';
import { IComuni } from '../interface/icomuni';
import { Province } from '../interface/province';
import { ProvinceService } from '../service/province.service';



@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.css']
})
export class InfoClientComponent implements OnInit {

    clientMod!: Clients;
    comune: IComuni[] = [];
    province: Province[] = [];
    tipoClient: string[] = [];


  constructor(private provinceService: ProvinceService, private comuneService: ComuneService, private clientiService: ClientiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.clientiService.getClient(id).subscribe(response => )
    this.route.params.subscribe(params => {
      if(params.id){
        this.clientiService.getClient(params.id)
          .subscribe(response => {
            this.clientMod = response
            console.log(this.clientMod)
          }
            )
      }
    })

    this.getTipoClient();
    this.getProvince();
    this.getComuni();

  }


//!!!!!!!!!!!!!!!!!!!!!!!!!!! MODIFICA CLIENTE
  updateUser(){
    this.clientiService.updateClient(this.clientMod)
      .subscribe(response => this.clientMod = response)

      this.router.navigate(['client/list']);
  }
//!!!!!!!!!!!!!!!!!!!!!!!!!!! MODIFICA CLIENTE

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
