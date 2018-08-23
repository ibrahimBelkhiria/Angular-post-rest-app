import { Component, OnInit } from '@angular/core';
import {Post} from '../post/Post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {


  post: Post;
  constructor(private postService: PostService, private router: ActivatedRoute) {
    const  id =   this.router.snapshot.params['id'];
    this.postService.getOnePost(id).subscribe(result => {
      this.post = result;
      console.log(result);
    });
  }

  ngOnInit() {
  }

}
