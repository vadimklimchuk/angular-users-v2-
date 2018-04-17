import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

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

    localStorage.setItem('url', id + '');
  }

  cancel() {
    this.router.navigate([{ outlets: { popup: null }}]);
    localStorage.setItem('url', null);
  }
}
