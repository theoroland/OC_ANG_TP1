import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts = [
    new Post("Mon premier post", "Aujourd'hui, j'ai mangé une pomme"),
    new Post("Mon second post", "Deux asticots se retrouvent dans une pomme :\n- Tiens ! Je ne savais pas que vous habitiez le quartier !"),
    new Post("Mon dernier post", "Elle n'était vraiment pas bonne!"),
  ]
}
