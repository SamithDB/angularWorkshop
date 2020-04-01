import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackHomeComponent } from './back-home.component';

describe('BackHomeComponent', () => {
  let component: BackHomeComponent;
  let fixture: ComponentFixture<BackHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
