import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomCardComponent } from './chatroom-card.component';

describe('ChatroomCardComponent', () => {
  let component: ChatroomCardComponent;
  let fixture: ComponentFixture<ChatroomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatroomCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
