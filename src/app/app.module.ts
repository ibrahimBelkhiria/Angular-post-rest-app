import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import {Route, RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import {FormsModule} from '@angular/forms';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AdminComponent } from './admin/admin.component';
import { PostListComponent } from './post-list/post-list.component';
import {JwtModule} from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'post', component: PostComponent, canActivate: [AuthGuard]},
  {path: 'post/detail/:id', component : PostDetailComponent},
  {path: 'post/update/:id', component: UpdatePostComponent},
  {path: 'post/admin', component: AdminComponent , canActivate: [AdminGuard]}
];

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
    AddPostComponent,
    UpdatePostComponent,
    PostDetailComponent,
    AdminComponent,
    PostListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
