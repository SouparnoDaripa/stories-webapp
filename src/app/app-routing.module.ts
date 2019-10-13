import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCategoryComponent } from './blog-category/blog-category.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'home', component : HomeComponent},
  {path: 'topic/:categoryName', component : BlogCategoryComponent},
  {path: 'story', component : BlogViewComponent},
  {path: 'story/:blogId', component : BlogViewComponent},
  {path: 'login', component : LoginComponent},
  {path: 'signup', component : SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
