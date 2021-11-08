import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClientiService {

    bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM4NjQzOSwiZXhwIjoxNjM3MjUwNDM5fQ.OuX05eMBpDcZnUb3YUog3SDQRXZcpQgRSn28NpoieHVwt59wtHvMNbtEKoPDrqzKd5usp8-OUADRKIOfMAnspQ';
    urlApi = environment.urlApi + '/api/clienti?page=0&size=20&sort=id,ASC'
    headers = new HttpHeaders();
    tenantID = 'fe_0421';


  constructor(private http: HttpClient) {
    this.headers = this.headers
      .set('Authorization', 'Bearer ' + this.bearerAuth)
      .set("X-TENANT-ID" , this.tenantID);
  }

  getAllClienti(){
    return this.http.get(this.urlApi, {headers: this.headers});
  }

}
