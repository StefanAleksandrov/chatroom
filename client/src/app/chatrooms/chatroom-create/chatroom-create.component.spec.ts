import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomCreateComponent } from './chatroom-create.component';

describe('ChatroomCreateComponent', () => {
  let component: ChatroomCreateComponent;
  let fixture: ComponentFixture<ChatroomCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatroomCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
