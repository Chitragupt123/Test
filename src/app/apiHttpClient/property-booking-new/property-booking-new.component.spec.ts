import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBookingNewComponent } from './property-booking-new.component';

describe('PropertyBookingNewComponent', () => {
  let component: PropertyBookingNewComponent;
  let fixture: ComponentFixture<PropertyBookingNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBookingNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBookingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
