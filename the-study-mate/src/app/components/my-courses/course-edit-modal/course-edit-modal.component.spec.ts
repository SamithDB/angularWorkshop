import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditModalComponent } from './course-edit-modal.component';

describe('CourseEditModalComponent', () => {
  let component: CourseEditModalComponent;
  let fixture: ComponentFixture<CourseEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
