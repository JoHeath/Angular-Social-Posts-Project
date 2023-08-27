import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
  
  listPosts:Post [] = [
    {
      title: "Football",
      thought: "I need some tackling fuel"
    },
    {
      title: "Baseball",
      thought: "Why is this game so long"
    },
    {
      title: "Hockey",
      thought: "How does the goalie even see the puck!"
    }
  ];

  submitPost(post:Post):void{
    this.listPosts.push(post);
  }

 

}
