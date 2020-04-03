import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-course-edit-modal',
  templateUrl: './course-edit-modal.component.html',
  styleUrls: ['./course-edit-modal.component.css']
})
export class CourseEditModalComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() course: Course;

  formGroup: FormGroup;

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private courseStore: CoursesStoreService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: [this.course.title, Validators.required],
      description: [this.course.description, Validators.required],
      price: [this.course.price, Validators.required],
      imgUrl: [this.course.imgUrl]
    });
  }

  onSave() {
    const value = this.formGroup.value as Course;
    if (this.course.id) {
      value.id = this.course.id;
      this.courseStore.updateCourse(value);
    } else {
      this.courseStore.createCourse(value);
    }

    this.activeModal.close('close');
  }

  onClose() {
    this.activeModal.dismiss('dismiss');
  }
}
