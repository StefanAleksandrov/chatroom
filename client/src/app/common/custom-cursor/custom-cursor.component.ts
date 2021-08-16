import { Component, OnInit } from '@angular/core';

import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-custom-cursor',
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss']
})
export class CustomCursorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //create observable that emits click events
    const source = fromEvent(document, 'mousemove');
    //map to string with given event timestamp
    const example = source.pipe(map(event => JSON.stringify(event)));
    const subscribe = example.subscribe(val => console.log(val));
  }
}
