import { Component } from '@angular/core';
import {Post } from './post/post-list/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookAdda';
  addedPost: Post[] = [];

  addPost(post) {
    this.addedPost.push(post);
  }
}
