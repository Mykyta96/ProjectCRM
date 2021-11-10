import { FormsModule } from '@angular/forms';
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


const routes =[
  {path:'client/home', component: HomePageComponent },
  {path: '', pathMatch: 'full', redirectTo: 'client/home'},
  {path:'client/list', component: ClientListComponent },
  {path:'client/add', component: AddClientComponent },
  {path:'client/:id/info', component: InfoClientComponent },
  {path:'client/contatti', component: ContattiComponent },


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddClientComponent,
    ClientListComponent,
    HomePageComponent,
    ContattiComponent,
    InfoClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
