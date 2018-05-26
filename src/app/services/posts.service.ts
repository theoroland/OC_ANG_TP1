import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostsService {

  posts: Post[] = [
    new Post("Mon premier post", "Aujourd'hui, j'ai mangé une pomme"),
    new Post("Mon second post", "Deux asticots se retrouvent dans une pomme :\n- Tiens ! Je ne savais pas que vous habitiez le quartier !"),
    new Post("Mon dernier post", "Elle n'était vraiment pas bonne!"),
  ];
  postsSubject = new Subject<Post[]>();
   
  emitPosts()
  {
    this.postsSubject.next(this.posts);
  }

  getSinglePost(id: number)
  {
    return this.posts[id];
  }

  onDislike(post: Post)
  {    
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post)
        {
          return true;
        }
      }
    );
    this.posts[postIndexToRemove].loveIts --;
  }

  onLike(post: Post)
  {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post)
        {
          return true;
        }
      }
    );
    this.posts[postIndexToRemove].loveIts ++;
  }

  createNewPost(newPost: Post)
  {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post: Post)
  {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post)
        {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

}
