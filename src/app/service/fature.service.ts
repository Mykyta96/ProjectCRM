import { Fature } from './../interface/fature';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Content } from '../interface/content';

@Injectable({
  providedIn: 'root'
})
export class FatureService {


  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NjQzOSwiZXhwIjoxNjM3MjUwNDM5fQ.OuX05eMBpDcZnUb3YUog3SDQRXZcpQgRSn28NpoieHVwt59wtHvMNbtEKoPDrqzKd5usp8-OUADRKIOfMAnspQ';
  urlApi = environment.urlApi + '/api/clienti?page=0&size=100&sort=id,DESC'
  headers = new HttpHeaders();
  tenantID = 'fe_0421';


constructor(private http: HttpClient) {
  this.headers = this.headers
    .set('Authorization', 'Bearer ' + this.bearerAuth)
    .set("X-TENANT-ID" , this.tenantID);
}

getAllFatture(){
  return this.http.get<Content>(`${environment.urlApi}/api/fatture?page=0&size=100&sort=id,DESC`,{headers: this.headers});
}

getFattura(id: string){
  return this.http.get<Fature>(`${environment.urlApi}/api/fatture/${id}`, {headers: this.headers});
}

createFattura(item: Fature){
  return this.http.post<Fature>(`${environment.urlApi}/api/fatture`, item, {headers: this.headers});
}

removeFattura(id: number){
  return this.http.delete<Content>(`${environment.urlApi}/api/fatture/${id}`, {headers: this.headers})
}

}
