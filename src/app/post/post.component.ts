import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from './Post';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  posts: Post[];


  constructor(private postService: PostService, private  router: Router) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    }, error1 => console.log(error1) );

  }

  viewDetails(id) {

    this.router.navigate( ['post/detail', id]);
  }
}
