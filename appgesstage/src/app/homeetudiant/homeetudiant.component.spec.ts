import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeetudiantComponent } from './homeetudiant.component';

describe('HomeetudiantComponent', () => {
  let component: HomeetudiantComponent;
  let fixture: ComponentFixture<HomeetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
