import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona/persona';
import { Sexo } from 'src/app/models/Sexo/sexo';
import { Tipodocumento } from 'src/app/models/TipoDocumento/tipodocumento';
import { PersonaService } from 'src/app/services/Persona/persona.service';
import { TipodocumentoService } from 'src/app/services/TipoDocumento/tipodocumento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {
  sexo:Sexo[]=[{idsexo:"M",nombre:"Masculino"},{idsexo:"F",nombre:'Femenino'}];
  personaModel:Persona=new Persona();
  tipodocumentos:Tipodocumento[];
  constructor(private personaService:PersonaService,private router:Router,private activatedRoute:ActivatedRoute,private tipodocumentoService:TipodocumentoService) { }

  ngOnInit(): void {
    this.tipodocumentoService.getTipodocumentos().subscribe(
      (data)=>{
        this.tipodocumentos = data;
      }
    );
  }
  public create():void{
    this.personaService.addPersona(this.personaModel).subscribe(
      response=>{
        console.log(this.personaModel);
        this.router.navigate(['/listpersona']);
        Swal.fire(
          'Nueva Persona',
          `${this.personaModel.nombres} creado con exito`,
          'success'
        );
      }
    )
  }

}
