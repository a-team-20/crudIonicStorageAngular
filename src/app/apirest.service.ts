import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  listado = [];
  item : any;
  private urlAPi =  'https://jsonplaceholder.typicode.com/'; // url base de la API
  constructor(private httpClient: HttpClient) { }

  // método para traer a todos los usuarios que proveerá la API
  getUsers()
  {
    // definir url para solicitud
    let url = this.urlAPi + "users";
    this.listado =[]; // limpiar propiedad
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe((data: []) => {
        resolve(data);
        data.forEach(item => { this.listado.push(item);})
      },
      error =>
      {
        console.log("Error en la comunicación con el server");
      });
    });
  }
  // método para obtener solo a un usuario
  async getUser(id:String)
  {  
    let url = this.urlAPi + "users/" + id;
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe((data: any) => {
        resolve(data);
        this.item =  data;
      },
      error =>
      {
        console.log("Error en la comunicación con el server");
      });
    });
  }

}
