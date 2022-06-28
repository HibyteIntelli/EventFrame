import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselEventCardComponent } from './carousel-event-card.component';

describe('EventCardComponent', () => {
  let component: CarouselEventCardComponent;
  let fixture: ComponentFixture<CarouselEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselEventCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
