import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionjuryComponent } from './attributionjury.component';

describe('AttributionjuryComponent', () => {
  let component: AttributionjuryComponent;
  let fixture: ComponentFixture<AttributionjuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributionjuryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributionjuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
