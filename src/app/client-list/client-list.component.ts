import { ClientiService } from '../service/clienti.service';
import { Component, Input, OnInit } from '@angular/core';
import { Clients } from '../interface/clients';
import { Router } from '@angular/router';



@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {



  clientList: Clients[] = [];



  constructor(private router: Router, private clientiService: ClientiService) { }

  ngOnInit(): void {
    this.clientiService.getAllClient().subscribe(response => this.clientList = response.content)//
  }


  removeClient(id: any){
    this.clientiService.removeClient(id).subscribe(response => {
      this.clientList = this.clientList.filter(elem => elem.id != id)
      console.log(response);
    })
  }


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!SELEZIONO USER
  selectUser(clientList: Clients): void{
    this.router.navigate(['client', clientList.id, 'info']);//item.id,
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!SELEZIONO USER



}
