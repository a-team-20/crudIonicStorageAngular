import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; /**Permite rescatar los parametros de la url */
// importar Service con el APIREST
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  listado = [];
  datos : any;
  id = "";
  constructor(private activateRouter: ActivatedRoute,private api: ApiRestService) { }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap =>{
      /** el nombre del parametro es el definido en el archivo app-routing.module.ts
       * routing de la carpeta app 
      */
      this.id = paramMap.get('id') ;
      //console.log(id);
      this.leer();
    });
  }

  async leer()
  {

    await this.api.getUser(this.id);
    this.listado = await  this.api.getPosts(this.id);
  //  console.log(this.api.datos);
    this.datos = this.api.datos;
    //this.listado = this.api.listado;//.filter((x,i)=>{return x[i].userId ==this.id});

  }
  ingresar()
  {
    this.api.createPost(1,"hola","un saludo!");
  }

}
