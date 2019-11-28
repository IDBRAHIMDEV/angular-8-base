
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  display: boolean = false;
  editable: boolean = false;

  post: any = {
    title: '',
    body: ''
  }

  ourPosts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAll().subscribe((posts: any[]) => {
        this.ourPosts = posts;
        console.log(this.ourPosts)
    })
  }

  persistPost() {
    this.postService.persist(this.post).subscribe(res => {
     
      this.ourPosts = [res, ...this.ourPosts];
      
      this.post = {
        title: '',
        body: ''
      }

      this.display = false;

    });
  }

  displayForm() {
    this.display = !this.display;
  }

  deletePost(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'To delete this post !',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
      
        this.postService.delete(id).subscribe(() => {
          this.ourPosts = this.ourPosts.filter(post => post.id !== id)

          Swal.fire({
            title: "Deleted!",
            text: "Your Post is deleted Successfully",
            icon: 'success',
            timer: 3000
          })
          
        })       
      } 
    })

  }

  editPost(data) {
    this.editable = true;
    this.post = data;
    this.display = true;
  }

  updatePost() {

  }

}
