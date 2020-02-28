import { Component, OnInit, HostBinding } from '@angular/core';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  posts: any = [];

  constructor(private postService: PostsService) { }

  ngOnInit() {
   this.getPosts();
  }

  getPosts(){
    this.postService.getPosts().subscribe(
      res => {
        this.posts = res;
      },
      err => console.log(err)
    )
  }

  //Método para eliminar el post con el boton
  deletePost(id: string){
    this.postService.deletePost(id)
    .subscribe(
      res => {
        console.log(res)
        this.getPosts();
      },
      err => console.log(err)
    )
  }

  //Metodo para editar post
  editPost(id: string){
    this.postService.getPost(id)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

}
