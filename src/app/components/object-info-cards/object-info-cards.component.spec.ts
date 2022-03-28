import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectInfoCardsComponent } from './object-info-cards.component';

describe('ObjectInfoCardsComponent', () => {
  let component: ObjectInfoCardsComponent;
  let fixture: ComponentFixture<ObjectInfoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectInfoCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectInfoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
