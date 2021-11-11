import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoClientComponent } from './info-client/info-client.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HttpClientModule} from '@angular/common/http';
import { FatureComponent } from './fature/fature.component';
import { InfoFattureComponent } from './info-fatture/info-fatture.component';


const routes =[
  {path:'client/home', component: HomePageComponent },
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:'client/list', component: ClientListComponent },
  {path:'client/add', component: AddClientComponent },
  {path:'client/fature', component: FatureComponent },
  {path:'client/:id/fature', component: InfoFattureComponent },
  {path:'client/:id/info', component: InfoClientComponent },
  {path:'client/contatti', component: ContattiComponent },

  // {path: 'login', component: LoginAdminComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddClientComponent,
    ClientListComponent,
    HomePageComponent,
    ContattiComponent,
    InfoClientComponent,
    FatureComponent,
    InfoFattureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
