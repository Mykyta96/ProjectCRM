import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteGuardService } from '../service/route-guard.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routeGuardService: RouteGuardService, private router: Router) { }

  /*
      GESTIONE DELLE ROTTE GUARD, DOPO LOGOUT NON POSSIAMO PIU ENTRARE NELLE ALTRE PAGGINE
  */

  ngOnInit(): void {
  }

  logout() {
    this.routeGuardService.setLogin();
    this.router.navigate(['login']);
  }


}
