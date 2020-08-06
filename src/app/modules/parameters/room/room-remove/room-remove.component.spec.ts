import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRemoveComponent } from './room-remove.component';

describe('RoomRemoveComponent', () => {
  let component: RoomRemoveComponent;
  let fixture: ComponentFixture<RoomRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
