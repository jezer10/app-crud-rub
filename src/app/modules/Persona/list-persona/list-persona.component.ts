import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona/persona';
import { Personauc } from 'src/app/models/Persona/personauc';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListPersonaComponent implements OnInit {
  personas:Personauc[];
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.listar();
  }

  delPersona(num:number):void{
    this.personaService.deletePersona(num).subscribe(
      response=>{
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras reverti esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText:'Me Equivoque',
          confirmButtonText: 'Si,Deseo Borrarlo!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.listar()
            Swal.fire('Eliminado!','El registro ha sido eliminado.','success')
          }
        })
      }
    )    
  }
  
  listar():void{
    this.personaService.getPersonas().subscribe((data)=>{this.personas = data['CURSOR_PERSONAS'];});
  }

}
