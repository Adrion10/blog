import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User1ListComponent } from './user1-list.component';

describe('User1ListComponent', () => {
  let component: User1ListComponent;
  let fixture: ComponentFixture<User1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User1ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
