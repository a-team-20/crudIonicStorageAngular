import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { ActivatedRoute } from '@angular/router'; //permite capturar el id


@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.page.html',
  styleUrls: ['./datos-persona.page.scss'],
})
export class DatosPersonaPage implements OnInit {
  datos :any;
  constructor(private api:ApirestService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.leer();
  }

  async leer()
  {
    let id = "";
    this.activatedRoute.paramMap.subscribe(async parametros => {
      id = parametros.get("id");
    })
    await this.api.getUser(id);
    this.datos = this.api.item;
    console.log(this.datos);
  }

}
