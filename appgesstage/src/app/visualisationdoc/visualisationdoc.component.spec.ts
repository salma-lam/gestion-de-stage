import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationdocComponent } from './visualisationdoc.component';

describe('VisualisationdocComponent', () => {
  let component: VisualisationdocComponent;
  let fixture: ComponentFixture<VisualisationdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualisationdocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualisationdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
