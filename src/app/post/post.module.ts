import { NgModule } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  createdAt:string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
