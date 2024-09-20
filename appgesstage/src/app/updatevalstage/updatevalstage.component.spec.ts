import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevalstageComponent } from './updatevalstage.component';

describe('UpdatevalstageComponent', () => {
  let component: UpdatevalstageComponent;
  let fixture: ComponentFixture<UpdatevalstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatevalstageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatevalstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
