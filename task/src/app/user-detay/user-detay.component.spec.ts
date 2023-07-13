import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetayComponent } from './user-detay.component';

describe('UserDetayComponent', () => {
  let component: UserDetayComponent;
  let fixture: ComponentFixture<UserDetayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetayComponent]
    });
    fixture = TestBed.createComponent(UserDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
