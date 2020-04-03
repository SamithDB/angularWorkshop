import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseEditModalComponent } from '../components/my-courses/course-edit-modal/course-edit-modal.component';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  geetings = 'FirstServiceService is created!';

  constructor( private modalService: NgbModal ) {
    console.log(this.geetings);
  }

  public anotherGreeting() {
    console.log('Greetings again!!');
  }

  public openCoureModal(course: Course, title: string): Promise<any> {
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.modalTitle = title;
    modalRef.componentInstance.course = course;
    return modalRef.result;
  }
}
