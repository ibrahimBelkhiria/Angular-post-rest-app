import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post/Post';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  posts: Post[];
  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    }, error1 => console.log(error1) );
  }

  ngOnInit() {
  }

  refreshArray($event) {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);

    }, error1 => console.log(error1) );
    console.log('refreshed');
  }
}
