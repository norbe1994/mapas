import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './material.module'
import { AgmCoreModule } from '@agm/core'

// componentes
import { AppComponent } from './app.component'
import { MapaComponent } from './components/mapa/mapa.component'

@NgModule({
  declarations: [AppComponent, MapaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgg2YkODesHFSC-YmCuHntPKfQXLjpTJM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
