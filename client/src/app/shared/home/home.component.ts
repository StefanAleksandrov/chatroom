import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

// Interfaces
import { IChatroom } from '../interfaces/chatroom';

// Services
import { AuthService } from 'src/app/auth/auth.service';
import { ChatroomService } from 'src/app/chatrooms/chatroom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pages: number[];
  activepage: number;
  chatRooms: IChatroom[] | undefined;
  search: string;
  noChatroom: IChatroom;

  get isLogged(): boolean {
    return this.authService.isLogged();
  }

  get chatRoomsDisplay(): IChatroom[] | undefined {
    const start = (this.activepage - 1) * 4;
    const end = start + 4;
    if (this.chatRooms) return this.chatRooms?.slice(start, end);
    else return undefined;
  }

  get pagesDisplay(): number[] {
    const arr: number[] = [];
    const limit: number | undefined = this.chatRooms ? this.chatRooms.length : undefined;
    let number: number = 1;

    if (!limit) return [1];

    for (let index = 0; index < limit; index += 4) {
      arr.push(number++);
    }

    return arr;
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private chatroomService: ChatroomService
  ) {
    this.pages = [1];
    this.activepage = 1;
    this.chatRooms = undefined;
    this.search = "";
    this.noChatroom = {
      _id: "string",
      name: "No chatrooms",
      description: "There are no chatrooms created yet.",
      image: "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png",
      creator: "creator",
      members: ["members"],
      messages: ["messages"],
      created_at: "1/1/1",
    }
  }

  ngOnInit(): void {
    this.getChatrooms(undefined);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  setActivepage(page: number): void {
    this.activepage = page;
  }

  getChatrooms(form: NgForm | undefined): void {
    let { search } = form != undefined ? form.value : { search: "" };

    this.chatroomService.getChatrooms(search).subscribe(data => {
      this.chatRooms = data.chatrooms;
    });
  }

  changePage(command: string) {
    switch (command) {
      case 'first':
        this.activepage = 1;
        break;
      case 'previous':
        this.activepage = Math.max(1, this.activepage - 1);
        break;
      case 'next':
        this.activepage = Math.min(this.activepage + 1, Math.ceil(this.chatRooms!.length / 4));
        break;
      case 'last':
        this.activepage = Math.ceil(this.chatRooms!.length / 4);
        break;
      default:
        console.log(command, "is unknown command");
    }
  }
}
