import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './Heroes/Heroes.module';
import { ListadoComponent } from './Heroes/Listado/listado.component';
import { contadorModule } from './Contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
