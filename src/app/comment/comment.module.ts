import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Comment {
  id: number;
  postId: number;
  name: string;
  body: string;
  email:string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CommentModule { }
