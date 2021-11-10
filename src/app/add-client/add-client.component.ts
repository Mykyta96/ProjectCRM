import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from '../clienti.service';
import { Clients } from '../clients';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {



  newClient: Clients = {
    nomeContatto: '',
    cognomeContatto: '',
    email: '',
    telefono: '',
    ragioneSociale: '',
    pec: '',
    partitaIva: '',
    tipoCliente: '',
    telefonoContatto: '',
    emailContatto: ''
  }

  constructor(
    private clientiService: ClientiService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   if(params.id){
    //     this.clientiService.getAllClient(params.id).subscribe(response => this.newClient = response)
    //   }
    // })
  }

  create(){
    this.clientiService.createClient(this.newClient)
      .subscribe(response => {
        this.newClient = response;
        // response = response;
        console.log(response);
        this.router.navigate(['client/list'])
      })
  }




}
