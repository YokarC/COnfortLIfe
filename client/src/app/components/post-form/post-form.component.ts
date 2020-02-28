import { Component, OnInit, HostBinding } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { ActivatedRoute, Router } from '@angular/router';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  post: Post ={
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false; //Para que sepa que esta editando y no guardando

  constructor(private postsService: PostsService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    console.log(params); 
    if (params.id) {
      this.postsService.getPost(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.post = res;
          this.edit = true;
        },
       err => console.log(err)
      )
   }

  }

  saveNewPost(){
    //Eliminar para no presentar problemas con la base de datos
    delete this.post.created_at;
    delete this.post.id;

    this.postsService.savePost(this.post)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/posts']);//Redirección de ruta a medida que ingresa el post
        },
        err => console.error(err)
      )
  }

  updatePost(){
    delete this.post.created_at;//No modificar la fecha de creado
    this.postsService.updatePost(this.post.id, this.post)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/posts']);
      },
      err => console.log(err)
    )
  }

}
