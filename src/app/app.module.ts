import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from '../app/components/grid/grid.component';
import { ButtonComponent } from '../app/components/button/button.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ViewoneComponent } from './components/pages/viewone/viewone.component';
import { ViewTwoComponent } from './view-two/view-two.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ButtonComponent,
    HomeComponent,
    ViewoneComponent,
    ViewTwoComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
