import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './clase1/mi-primer-componente/mi-primer-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
