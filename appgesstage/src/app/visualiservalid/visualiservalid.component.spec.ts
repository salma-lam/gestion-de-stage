import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiservalidComponent } from './visualiservalid.component';

describe('VisualiservalidComponent', () => {
  let component: VisualiservalidComponent;
  let fixture: ComponentFixture<VisualiservalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualiservalidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualiservalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
