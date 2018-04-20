import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users: Array<User>;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getLocalStorage();
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getLocalStorage(): void {
    if (localStorage.userId !== null && !isNaN(localStorage.userId)) {
      const userId = localStorage.getItem('userId');
      this.router.navigate([{ outlets: { popup: ['compose', userId] } }]);
    }
  }
}
