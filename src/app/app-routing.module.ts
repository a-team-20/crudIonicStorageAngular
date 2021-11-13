import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: '',
    redirectTo: 'persona',
    pathMatch: 'full'
  },
  {
    path: 'persona',
    loadChildren: () => import('./persona/persona.module').then( m => m.PersonaPageModule)
  },
  {
    path: 'datospersona/:id',
    loadChildren: () => import('./datos-persona/datos-persona.module').then( m => m.DatosPersonaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
