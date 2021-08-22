import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IChatroom } from '../interfaces/chatroom';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pages: number[];
  activepage: number;

  get isLogged(): boolean {
    return this.authService.isLogged();
  }

  get chatRooms(): IChatroom[] {
    return [
      {name: "test1", description: "desc test", image: 'https://media.wired.com/photos/5bb6accf0abf932caf294b18/125:94/w_2375,h_1786,c_limit/waves-730260985.jpg', owner_id: ["asd"], members: ["asd"], messages: [], created_at: new Date().toString(), _id: "asdasda124531"},
      {name: "test2", description: "desc test", image: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg', owner_id: ["asd"], members: ["asd"], messages: [], created_at: new Date().toString(), _id: "65a4sd21as56d"},
      {name: "test3", description: "desc test desc test desc test desc test", image: 'https://i.hurimg.com/i/hdn/75/0x0/5dcd630a0f25441794d60a1c.jpg', owner_id: ["asd"], members: ["asd"], messages: [], created_at: new Date().toString(), _id: "a56sd456a4sd"},
      {name: "test4", description: "desc test", image: 'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg', owner_id: ["asd"], members: ["asd"], messages: [], created_at: new Date().toString(), _id: "5a4sd654asd6"},
    ]
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.pages = [1, 2, 3, 4];
    this.activepage = 1;
  }

  ngOnInit(): void {}

  goToRegister() {
    return this.router.navigate(['/register']);
  }

  goToLogin() {
    return this.router.navigate(['/login']);
  }

  setActivepage(page: number) {
    this.activepage = page;
  }
}
