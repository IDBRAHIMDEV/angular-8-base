
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  genre = 'list';

  display: boolean = false;
  editable: boolean = false;

  post: any = {
    title: '',
    body: ''
  }

  ourPosts: any[] = [];
  resultPosts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAll().subscribe((posts: any[]) => {
        this.resultPosts = this.ourPosts = posts;
        console.log(this.ourPosts)
    })
  }

  persistPost(form) {
    
     if(form.invalid) {
      alert('sir tan3asss')
      return;
     }
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
     this.postService.update(this.post).subscribe(res => {
       this.post = {
         title: '',
         body: ''
       }
       this.display = false;
       this.editable = false;
     })
  }

  changeStatusPost(myPost) {
    myPost.active = !myPost.active;
    this.postService.changeStatus(myPost).subscribe((p: any) => {
      
    })
  }

  log(data) {
    console.log(data)
  }

  searchPost(data) {
    console.log(data)
    this.resultPosts = this.ourPosts.filter(post => 
        post.title.toLowerCase().includes(data.toLowerCase()) || 
        post.body.toLowerCase().includes(data.toLowerCase()))
  }

  incLike(post) {
     
    if(post.like) {
      post.like++;
    }
    else {
      post.like = 1;
    }

    this.postService.incLikeToDB(post).subscribe(() => console.log('incl'))
  }
  incDisLike(post) {
    if(post.disLike) {
      post.disLike++;
    }
    else {
      post.disLike = 1;
    }

    this.postService.incDisLikeToDB(post).subscribe(() => console.log('incDis'))
  }

}
