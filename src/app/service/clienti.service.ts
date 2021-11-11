import { Content } from '../interface/content';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clients } from '../interface/clients';

//

@Injectable({
  providedIn: 'root'
})

export class ClientiService {


  /*
      CHIAMATE PRESENTI SONO CHIAMATE PER ANDARE A PRENDERE I DATI DALL API
  */

    bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NjQzOSwiZXhwIjoxNjM3MjUwNDM5fQ.OuX05eMBpDcZnUb3YUog3SDQRXZcpQgRSn28NpoieHVwt59wtHvMNbtEKoPDrqzKd5usp8-OUADRKIOfMAnspQ';
    urlApi = environment.urlApi + '/api/clienti?page=0&size=100&sort=id,DESC'
    headers = new HttpHeaders();
    tenantID = 'fe_0421';


  constructor(private http: HttpClient) {
    this.headers = this.headers
      .set('Authorization', 'Bearer ' + this.bearerAuth)
      .set("X-TENANT-ID" , this.tenantID);
  }

  getAllClient(){
    return this.http.get<Content>(this.urlApi, {headers: this.headers});
  }

  getTipoClient(){
    return this.http.get<string[]>(`${environment.urlApi}/api/clienti/tipicliente`, {headers: this.headers})
  }

  getClient(id: string){
    return this.http.get<Clients>(`${environment.urlApi}/api/clienti/${id}`, {headers: this.headers});
  }

  updateClient(item: Clients){
    return this.http.put<Clients>(`${environment.urlApi}/api/clienti/${item.id}`,item, {headers: this.headers})
  }

  createClient(item: Clients){
    return this.http.post<Clients>(`${environment.urlApi}/api/clienti/`, item, {headers: this.headers})
  }

  removeClient(id: number){
    return this.http.delete<Content>(`${environment.urlApi}/api/clienti/${id}`, {headers: this.headers})
  }

}
