import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { DescargaComponent } from './descarga/descarga.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'quienes_somos', component: QuienesSomosComponent},
  {path: 'descarga', component: DescargaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
