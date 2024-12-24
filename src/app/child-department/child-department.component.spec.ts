import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDepartmentComponent } from './child-department.component';

describe('ChildDepartmentComponent', () => {
  let component: ChildDepartmentComponent;
  let fixture: ComponentFixture<ChildDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
