import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ViewoneComponent } from './components/pages/viewone/viewone.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'viewone', component: ViewoneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
