import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionnoteComponent } from './attributionnote.component';

describe('AttributionnoteComponent', () => {
  let component: AttributionnoteComponent;
  let fixture: ComponentFixture<AttributionnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributionnoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributionnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
