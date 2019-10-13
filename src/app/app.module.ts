import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NavComponent } from './nav/nav.component';
import { BlogCategoryComponent } from './blog-category/blog-category.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarPopularComponent } from './sidebar-popular/sidebar-popular.component';
import { SidebarCategoryPopularComponent } from './sidebar-category-popular/sidebar-category-popular.component';
import { BlogCommentsComponent } from './blog-comments/blog-comments.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BlogSimilarComponent } from './blog-similar/blog-similar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    NavComponent,
    BlogCategoryComponent,
    FooterComponent,
    SidebarPopularComponent,
    SidebarCategoryPopularComponent,
    BlogCommentsComponent,
    LoginComponent,
    SignupComponent,
    BlogSimilarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
