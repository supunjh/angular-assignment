import { Injectable } from '@angular/core';
import data from '../data/mock-data.json';
import { Post } from '../post/post.module';
import { Comment } from '../comment/comment.module';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = data.posts;
  private comments: Comment[] = data.comments;

  private pageSize = 10;
  private currentPage = 0;

  getPosts(): { next: boolean; result: Post[] } {
    const start = this.currentPage * this.pageSize;
    const result = this.posts.slice(start, start + this.pageSize);
    this.currentPage++;
    return {
      next: start + this.pageSize < this.posts.length,
      result,
    };
  }

  getPost(id: number): Post | undefined {
    return this.posts.find(p => p.id === id);
  }

  getComments(postId: number): Comment[] {
    return this.comments.filter(c => c.postId === postId);
  }

  resetPagination() {
    this.currentPage = 0;
  }
}