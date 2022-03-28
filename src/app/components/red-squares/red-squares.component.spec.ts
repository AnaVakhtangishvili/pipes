import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedSquaresComponent } from './red-squares.component';

describe('RedSquaresComponent', () => {
  let component: RedSquaresComponent;
  let fixture: ComponentFixture<RedSquaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedSquaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
