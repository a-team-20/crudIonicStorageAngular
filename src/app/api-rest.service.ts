import { Injectable } from '@angular/core';


// para usar REST importar en app.modele.ts:
// import { HttpClientModule } from '@angular/common/http';
// y agregar en imports: ,HttpClientModule

import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  listado = [];
  constructor(private http: HttpClient) { }

  getPost(id)
  {
    let url = this.apiUrl + "/posts/" + id;

    this.http.get(url).subscribe(data => {
      console.log(data);
      return data;
    }, err => {
      if(err.status == 404)
      {
        console.log(err);
        console.log("Error en la respuesta del servidor")
      }
    });
    return [];
  }
  getUsers()
  {
    this.listado = [];
    let url = this.apiUrl + "/users";
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/users').subscribe((data: []) => {
        resolve(data);
        data.forEach(element => {this.listado.push(element)});
      }, err => {
        reject(err);
      });
    });    
  }
}
