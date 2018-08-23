import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post/Post';
import {ActivatedRoute} from '@angular/router';
import {post} from 'selenium-webdriver/http';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  post: Post;
  constructor(private postService: PostService, private router: ActivatedRoute) {
     const  id =   this.router.snapshot.params['id'];
     this.postService.getOnePost(id).subscribe(result => {
       this.post = result;
     });
  }

  ngOnInit() {
  }

  updatePost(poste: Post) {
    if (poste.title !== '' && poste.description !== '') {

      this.postService.updatePost(poste, poste.id).subscribe(res => {
        console.log(res);
      }, error1 => console.log(error1));
    } else {
      console.log('all fields are required');
    }

  }

}
