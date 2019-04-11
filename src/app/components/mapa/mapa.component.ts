import { Component, OnInit } from '@angular/core'
import { Marcador } from 'src/app/classes/marcador.class'
import { MatSnackBar } from '@angular/material'

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

  constructor(private snackBar: MatSnackBar) {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'))
    }
  }

  ngOnInit() {}

  agregarMarcador(e: any) {
    const coords: { lat: number; lng: number } = e.coords
    const nuevoMarcador = new Marcador(coords.lat, coords.lng)
    this.marcadores.push(nuevoMarcador)
    this.guardarStorage()
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 })
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1)
    this.guardarStorage()
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 3000 })
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
  }
}
