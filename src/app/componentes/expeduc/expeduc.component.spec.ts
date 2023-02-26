import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeducComponent } from './expeduc.component';

describe('ExpeducComponent', () => {
  let component: ExpeducComponent;
  let fixture: ComponentFixture<ExpeducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
