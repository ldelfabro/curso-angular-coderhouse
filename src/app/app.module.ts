import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './clase1/mi-primer-componente/mi-primer-componente.component';
import { MiSegundoComponenteComponent } from './clase1/mi-segundo-componente/mi-segundo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiSegundoComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
