import { ClientiService } from './../clienti.service';
import { Component, OnInit } from '@angular/core';
import { Clients } from '../clients';
import { Router } from '@angular/router';

const COUNTRIES: Clients[] = [
  {
    id: 1,
     name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    id: 2,
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    id: 3,
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    id: 4,
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  countries = COUNTRIES;

  constructor(private router: Router, private clientiService: ClientiService) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti()
      .subscribe(response => {
        console.log(response)
      })
  }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!SELEZIONO USER
  selectUser(countries: Clients): void{
    this.router.navigate(['client', countries.id, 'info']);//item.id,
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!SELEZIONO USER



}
