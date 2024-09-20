import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCheffiliereComponent } from './login-cheffiliere.component';

describe('LoginCheffiliereComponent', () => {
  let component: LoginCheffiliereComponent;
  let fixture: ComponentFixture<LoginCheffiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCheffiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCheffiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
