import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCardListComponent } from './carousel-card-list.component';

describe('CarouselCardListComponent', () => {
  let component: CarouselCardListComponent;
  let fixture: ComponentFixture<CarouselCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
