import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { GlobalComponent } from './components/global/global.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    GlobalComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
