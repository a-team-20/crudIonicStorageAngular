import { Injectable } from '@angular/core';
//importar en el service al Storage de angular
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) { 
    //crear al storage para usarlo
    this.init();
  }

  // crea el storage
  async init()
  {
    await this.storage.create();
  }

  //ingresar datos al storage con key
  async agregarConKey(key: string, valor: string)
  {
    await this.storage.set(key, valor);
  }

  // ingresar datos al storage key autoincrementable forma opcional
  async agregar(valor:any)
  {
    let id = await this.storage.length() + 1 ;
    await this.storage.set(id.toString(), valor);
  }

  async rescatar(key:string)
  {
    return await this.storage.get(key);
  }
  listar()
  {
    let listado = []
    this.storage.forEach((v,k) => {listado.push(v); })
    return listado;

  }
  eliminar(key:string)
  {// ojo como se agrega cada elemento via autoincrementable o por otro codigo
    this.storage.remove(key);
  }

}
