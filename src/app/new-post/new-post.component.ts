import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      post: ['', Validators.required]
    });
  }

  onSavePost()
  {
    const title = this.postForm.get('title').value;
    const post = this.postForm.get('post').value;
    const newPost = new Post(title, post);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }
}
