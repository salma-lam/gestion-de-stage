import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationstageComponent } from './visualisationstage.component';

describe('VisualisationstageComponent', () => {
  let component: VisualisationstageComponent;
  let fixture: ComponentFixture<VisualisationstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualisationstageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualisationstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
