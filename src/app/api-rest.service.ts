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
  datos : any;
  constructor(private http: HttpClient) { 
    
  }

  getPost(id: string)
  {
    let url = this.apiUrl + "/posts/" + id;
    return this.getAny(url);
  }
  async getPosts(userId: any)
  {
    let url = this.apiUrl + "/posts";
    await this.getArray(url);
  
    let aux =this.listado.filter( (x) => {
      return x.userId == userId;
    });
    this.listado = aux; 
    return aux;
   
  }
  getUser(id: string)
  {
    let url = this.apiUrl + "/users/" + id;
    return this.getAny(url);
  }
  getUsers()
  {
    let url = this.apiUrl + "/users";
    return this.getArray(url);
  }

  createPost(userId: any,title:string, body:string)
  {
    let url = this.apiUrl + "/posts";
    let userPost = 
    { 
      "id"    : 0,
      "userId": userId,
      "title" : title,
      "body"  : body  
    }


    this.http.post<any>(url, userPost).subscribe(data => {
      console.log(data.id);
    })
/*    this.http.post<any>(url, { title: 'Angular POST Request Example' }).subscribe(data => {
      console.log(data.id);
  })

*/

  }




  getArray(url: string)
  {
    this.listado = [];
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: []) => {
        resolve(data);
        data.forEach(element => {this.listado.push(element)});
      }, err => {
        reject(err);
      });
    });    
  }
  getAny(url: string)
  {
    this.datos = "" ;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) => {
        resolve(data);
        this.datos = data;
      }, err => {
        reject(err);
      });
    });    
  }
}
