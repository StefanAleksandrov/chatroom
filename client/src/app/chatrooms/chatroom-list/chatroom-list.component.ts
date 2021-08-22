import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IChatroom } from 'src/app/shared/interfaces/chatroom';

@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.scss']
})
export class ChatroomListComponent implements OnInit {
  chatrooms : IChatroom[] | undefined;
  activeChat : string | undefined;

  constructor(
    private router: Router,
  ) {
    this.chatrooms = [
      {name: "test1", description: "desc test", image: 'https://media.wired.com/photos/5bb6accf0abf932caf294b18/125:94/w_2375,h_1786,c_limit/waves-730260985.jpg', owner_id: ["asd"], members: ["asd"], messages: [], created_at: new Date().toString(), _id: "asdasda124531"},
      {name: "test2", description: "desc test", image: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg', owner_id: ["asd"], members: ["asd"], messages: [], created_at: new Date().toString(), _id: "65a4sd21as56d"},
      {name: "test3", description: "desc test desc test desc test desc test", image: 'https://i.hurimg.com/i/hdn/75/0x0/5dcd630a0f25441794d60a1c.jpg', owner_id: ["asd"], members: ["asd"], messages: [], created_at: new Date().toString(), _id: "a56sd456a4sd"},
      {name: "test4", description: "desc test", image: 'https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg', owner_id: ["asd"], members: ["asd"], messages: [], created_at: new Date().toString(), _id: "5a4sd654asd6"},
      {name: "test1", description: "desc test", image: 'https://media.wired.com/photos/5bb6accf0abf932caf294b18/125:94/w_2375,h_1786,c_limit/waves-730260985.jpg', owner_id: ["asd"], members: ["asd"], messages: [], created_at: new Date().toString(), _id: "56a4sd65a1sd65"},
    ]

    this.activeChat = undefined;
  }

  ngOnInit(): void {
  }

  activateChat(id: string) {
    if (id == this.activeChat) this.activeChat = undefined;
    else this.activeChat = id;
  }

  createNewChatroom() {
    this.router.navigate(['chatrooms/add']);
  }
}
