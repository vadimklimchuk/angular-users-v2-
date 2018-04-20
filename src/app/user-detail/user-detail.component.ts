import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private users: Array<User>;
  private user: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('user-id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);

    localStorage.setItem('userId', id + ''); //  add in localStorage ID of SelectedUser
  }

  cancel(): void {
    this.router.navigate([{ outlets: { popup: null }}]);
    localStorage.setItem('userId', null);
  }
}
