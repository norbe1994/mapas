import { Component, OnInit } from '@angular/core'
import { Marcador } from 'src/app/classes/marcador.class'

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = []
  // Hamm Alemania
  lat: number = 51.678418
  lng: number = 7.809007

  constructor() {
    const nuevoMarcador = new Marcador(this.lat, this.lng)
    this.marcadores.push(nuevoMarcador)
  }

  ngOnInit() {}

  agregarMarcador(e: any) {
    const coords: { lat: number; lng: number } = e.coords
    const nuevoMarcador = new Marcador(coords.lat, coords.lng)
    this.marcadores.push(nuevoMarcador)
  }
}
