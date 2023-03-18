import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from '../app/components/grid/grid.component';
import { ButtonComponent } from '../app/components/button/button.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ViewoneComponent } from './components/pages/viewone/viewone.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ButtonComponent,
    HomeComponent,
    ViewoneComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
