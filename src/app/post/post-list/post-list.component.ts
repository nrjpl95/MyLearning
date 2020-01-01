import { Component, OnInit, Input } from '@angular/core';
import {Post } from '../post-list/post.model';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
@Input() posts: Post[] = [
    // {title: 'First', Content : 'This is first body'},
    // {title: 'Second', Content : 'This is first body'},
    // {title: 'Third', Content : 'This is first body'},
    // {title: 'Fourth', Content : 'This is first body'},
    // {title: 'Fifth', Content : 'This is first body'}
];
  constructor() { }

  ngOnInit() {
  }

}
