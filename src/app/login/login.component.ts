import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteGuardService } from '../service/route-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginEmail!: string;
  loginPassword!: string;

  constructor(private router: Router, private routeGuardService: RouteGuardService) { }

  ngOnInit(): void {
  }

  signin() {
    if(this.loginEmail === 'admin' && this.loginPassword === 'admin') {
      this.routeGuardService.setLogin();
      this.router.navigate(['client/home']);
    } else {
      alert('Login e password: admin admin')
      this.loginEmail = '';
      this.loginPassword = '';
    }
  }

}
