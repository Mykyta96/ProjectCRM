import { Clients } from './../clients';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from './../clienti.service';



@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.css']
})
export class InfoClientComponent implements OnInit {

    clientMod!: Clients;

  constructor(private clientiService: ClientiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.clientiService.getClient(id).subscribe(response => )
    this.route.params.subscribe(params => {
      if(params.id){
        this.clientiService.getClient(params.id)
          .subscribe(response => this.clientMod = response)
      }
    })
  }


//!!!!!!!!!!!!!!!!!!!!!!!!!!! MODIFICA CLIENTE
  updateUser(){
    this.clientiService.updateClient(this.clientMod)
      .subscribe(response => this.clientMod = response)
      this.router.navigate(['client/list']);
  }
//!!!!!!!!!!!!!!!!!!!!!!!!!!! MODIFICA CLIENTE




}
