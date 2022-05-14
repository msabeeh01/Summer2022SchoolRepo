import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  panelOpenState = false;
  posts = [
    {title: 'First Post', content: 'First Post Content'}

  ];
}
