import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post/Post';
import {Router} from '@angular/router';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // input from the admin component
  @Input() posts: Post[];
  constructor(private postService: PostService, private  router: Router) { }

  ngOnInit() {

  }

  updateEvent(p: Post) {
    this.router.navigate(['post/update', p.id]);
  }

  deleteEvent(p: Post, i) {
    if (confirm('are you sure ?')) {
      this.postService.deletePost(p.id).subscribe(value => console.log('post deleted'));
      this.posts.splice(i, 1);
    }
  }

  showEvent(p: Post) {
    this.router.navigate( ['post/detail', p.id]);
  }
}
