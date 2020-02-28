import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Definiendo rutas en el navegador, debemos importar el componente
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

//Se maaneja por medio de objetos
//Acá se puede dar rutas a los usuarios desde el primer momento que entran a la aplicación
const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  }, 
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'posts/add',
    component: PostFormComponent //Renderizar el componente
  },
  {
    path: 'posts/edit/:id',
    component: PostFormComponent
  },
  {
    path: 'posts/login',
    component: LoginFormComponent
  },
  {
    path: 'posts/home',
    component: HomeFormComponent,
  },
  {
    path: 'posts/register',
    component: RegisterFormComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
