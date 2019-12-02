import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  myUsers: any[] = [];
  resultUsers: any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getUsers().subscribe((users: any[]) => {
      this.resultUsers = this.myUsers = users;
    })
  }

  searchUser(data: string) {
     this.resultUsers = this.myUsers.filter(user => user.login.toLowerCase().includes(data.toLowerCase()))

     if(!this.resultUsers.length && data.length > 3) {
       this.userService.getUsersFromServer(data).subscribe((users: any) => {
         this.resultUsers = users.items;
       })
     }
  }

}
