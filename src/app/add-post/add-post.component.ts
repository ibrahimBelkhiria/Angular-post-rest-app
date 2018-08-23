import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../post/Post';
import {PostService} from '../post.service';
import {p} from '@angular/core/src/render3';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


  @Output() notify = new EventEmitter();
  post: Post = {
    title : '',
    description : ''
  };

  constructor(private  postService: PostService) { }

  ngOnInit() {
  }

  addPost(post: Post) {
    if (post.title !== '' && post.description !== '') {

      this.postService.addPost(post).subscribe(res => {
        console.log(res);
        console.log('post added');
        this.notify.emit();
      }, error1 => console.log(error1));

    } else {
      console.log('all fields are required');
    }

    }


}
