import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailedCardComponent } from './event-detailed-card.component';

describe('EventDetailedCardComponent', () => {
  let component: EventDetailedCardComponent;
  let fixture: ComponentFixture<EventDetailedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
