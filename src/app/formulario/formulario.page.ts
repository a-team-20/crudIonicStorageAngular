import { Component, OnInit } from '@angular/core';

// importar Service con el APIREST
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  lista = [];
  nombre ="";
  id = "";
  constructor(private api: ApiRestService) { }
  ngOnInit() {
    //this.listado = this.api.getPost(1) ;
    //this.listar();

  }
  listar()
  {
    const datos = this.api.getUsers();
    this.lista = this.api.listado;

    //console.table(this.api.listado);
    //console.table(datos);
    //datos.then(d => this.listado.push(d));
    
    //console.table(this.listado);
  }
}