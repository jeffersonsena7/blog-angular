import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

//rotas de paginas,
const routes: Routes = [
  { path: '',
    component: HomeComponent
  },

  {
    //para pegar na rota o id  da noticia e mostrar a noticia correspondente
    path: 'content/:id',
    component: ContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
