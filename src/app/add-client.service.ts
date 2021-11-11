import { Clients } from './interface/clients';
import { Content } from './interface/content';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddClientService {

  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NjQzOSwiZXhwIjoxNjM3MjUwNDM5fQ.OuX05eMBpDcZnUb3YUog3SDQRXZcpQgRSn28NpoieHVwt59wtHvMNbtEKoPDrqzKd5usp8-OUADRKIOfMAnspQ';
    // urlApi = environment.urlApi + '/api/clienti?page=0&size=20&sort=id,ASC'
    headers = new HttpHeaders();
    tenantID = 'fe_0421';

  constructor(private http: HttpClient) {
    this.headers = this.headers
    .set('Authorization', 'Bearer ' + this.bearerAuth)
    .set("X-TENANT-ID" , this.tenantID);
  }

  create(post: Clients){
    return this.http.post<Clients>(`${environment.urlApi}/api/clienti`, post)
  }

  getClient(id: string){
    return this.http.get<Clients>(`${environment.urlApi}/api/clienti${id}`);
  }



}
