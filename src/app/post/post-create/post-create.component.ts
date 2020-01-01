import { Component, EventEmitter, Output } from '@angular/core';
import {Post } from '../post-list/post.model';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredValue;
  allValue;
  enteredContent;
  @Output() addPostEvent = new EventEmitter<Post>();
  // onAddPost(textObject: HTMLTextAreaElement) {
  //   console.dir(textObject.value);
  //   alert('hello');
  //   this.allValue = textObject.value;
  // }

  onAddPost() {
    const posts:Post = {title: this.enteredValue, Content : this.enteredContent};


    this.addPostEvent.emit(posts);
  }
}
