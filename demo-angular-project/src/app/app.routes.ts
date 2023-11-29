import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
