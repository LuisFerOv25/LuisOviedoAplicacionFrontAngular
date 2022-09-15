import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentarios';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css']
})
export class ListarComentariosComponent implements OnInit {

  listComentarios: Comentario[] = [
    {
      titulo: 'Cibersecurity',
      autor: 'Jose Andrade',
      fechaCreacion: new Date(),
      texto: 'Auditoria en cyberseguridad avanzada'
    },
    {
      titulo: 'Machine learning',
      autor: 'Lucio Huertas',
      fechaCreacion: new Date(),
      texto: 'Comentario relacionado con el machine learning'
    },
    {
      titulo: 'Inteligenvia Artificial',
      autor: 'Carmen Argoty',
      fechaCreacion: new Date(),
      texto: 'Inteligencia artificial enfocada a la educacion'
    },
    {
      titulo: 'VR (Realidad virtual)',
      autor: 'Mario Cordoba',
      fechaCreacion: new Date(),
      texto: 'Integracion de VR con realidad aumentada'
    },
    {
      titulo: 'BlockChain',
      autor: 'Victoria Benavides',
      fechaCreacion: new Date(),
      texto: 'Creacion de criptomonedas como Ethereum'
    },
    {
      titulo: 'Desarrollo web',
      autor: 'Jhon Mendes',
      fechaCreacion: new Date(),
      texto: 'Desarrollo de paginas web con angular'
    }

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
