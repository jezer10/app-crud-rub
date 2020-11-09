import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPersonaComponent } from './modules/Persona/add-persona/add-persona.component';
import { EditPersonaComponent } from './modules/Persona/edit-persona/edit-persona.component';
import { ListPersonaComponent } from './modules/Persona/list-persona/list-persona.component';

const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path:'listpersona',component:ListPersonaComponent},
  {path:'addpersona',component:AddPersonaComponent},
  {path:'editpersona/:id',component:EditPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
