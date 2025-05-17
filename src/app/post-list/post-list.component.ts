import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../post/post.module';
import { CommonModule, SlicePipe } from '@angular/common';
import { CommentModule } from '../comment/comment.module';

@Component({
  selector: 'app-post-list',
  imports: [SlicePipe,CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  hasMore: boolean = true;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    const res = this.postService.getPosts();
    this.posts = [...this.posts, ...res.result];
    this.hasMore = res.next;
  }

  viewPost(id: number) {
    this.router.navigate(['/post', id]);
  }
}
