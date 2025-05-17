import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post/post.module';
import { Comment } from '../comment/comment.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;
  comments: Comment[] = [];

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPost(id);
    this.comments = this.postService.getComments(id);
  }


}
