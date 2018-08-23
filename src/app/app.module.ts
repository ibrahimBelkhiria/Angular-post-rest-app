import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import {FormsModule} from '@angular/forms';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AdminComponent } from './admin/admin.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {path: 'post', component: PostComponent},
  {path: 'post/detail/:id', component : PostDetailComponent},
  {path: 'post/admin', component: AdminComponent },
  {path: 'post/update/:id', component: UpdatePostComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
    AddPostComponent,
    UpdatePostComponent,
    PostDetailComponent,
    AdminComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
