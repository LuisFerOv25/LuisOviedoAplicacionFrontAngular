import { Component, OnInit } from '@angular/core';
import { DatosP } from '../interfaces/datosPersonales';

@Component({
  selector: 'app-listar-datos-personales',
  templateUrl: './listar-datos-personales.component.html',
  styleUrls: ['./listar-datos-personales.component.css']
})
export class ListarDatosPersonalesComponent implements OnInit {

  listComentarios: DatosP[] = [
    {
      identificacion: 9899200,
      nombre: 'Carlos',
      apellido: 'Suarez',
      direccion: 'MZ-12 Las cruces',
      email: 'Carlossuarez@gmail.com',
      telefono: 3124567899
    },
    {
      identificacion: 3849284,
      nombre: 'Mario',
      apellido: 'Huerta',
      direccion: 'MZ345- Pasto',
      email: 'MarioHuer4@gmail.com',
      telefono: 3215465765
    },
   

  ]
  constructor() { }

  ngOnInit(): void {
  }


}
