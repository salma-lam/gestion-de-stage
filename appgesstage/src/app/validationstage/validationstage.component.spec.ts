import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationstageComponent } from './validationstage.component';

describe('ValidationstageComponent', () => {
  let component: ValidationstageComponent;
  let fixture: ComponentFixture<ValidationstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationstageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
