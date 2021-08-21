import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-custom-cursor',
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss']
})
export class CustomCursorComponent implements OnInit {
  pageX: number
  pageY: number
  class: string

  constructor() {
    this.pageX = 960;
    this.pageY = 500;
    this.class = "cursor"
  }

  ngOnInit(): void {
    //create observable that emits click events
    fromEvent<MouseEvent>( document.body, 'click')
      .subscribe((event) =>  {
        this.class = "cursor expand";

        setTimeout(() => {
          this.class = "cursor";
        }, 500);
      });

    //create observable that emits mouse move events
    fromEvent<MouseEvent>( document.body, 'mousemove')
      .subscribe((event) =>  {
        this.pageX = event.pageX - 16;
        this.pageY = event.pageY - 16;
      });

    return;
  }
}
