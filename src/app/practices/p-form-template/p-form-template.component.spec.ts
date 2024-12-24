import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFormTemplateComponent } from './p-form-template.component';

describe('PFormTemplateComponent', () => {
  let component: PFormTemplateComponent;
  let fixture: ComponentFixture<PFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PFormTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
