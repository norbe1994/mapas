import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './material.module'
import { AgmCoreModule } from '@agm/core'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

// componentes
import { AppComponent } from './app.component'
import { MapaComponent } from './components/mapa/mapa.component'
import { MapaEditarComponent } from './components/mapa/mapa-editar.component'

@NgModule({
  entryComponents: [MapaEditarComponent],
  declarations: [AppComponent, MapaComponent, MapaEditarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgg2YkODesHFSC-YmCuHntPKfQXLjpTJM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
