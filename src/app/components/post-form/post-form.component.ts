import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  newPost:Post={} as Post;
  display:boolean = false;
  @Output() Submitted = new EventEmitter<Post>();

  submitPost():void{
    this.Submitted.emit(this.newPost);
    this.newPost={} as Post;
  };

  ToggleDisplay():void{
    this.display=!this.display
  }

}
