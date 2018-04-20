import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private title = 'A list of users';
  private alt = 'Angular';
  private imageLogo = '../../assets/images/logo.png';
}
