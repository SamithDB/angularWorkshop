import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/models/course';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CourseEditModalComponent } from './course-edit-modal/course-edit-modal.component';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { FirstServiceService } from 'src/app/services/first-service.service';
import { Subscription } from 'rxjs';

const DEBUG = false;

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit, OnDestroy {
  courses: Course[];
  coursesSubscription: Subscription;

  constructor(
    private modalService: NgbModal,
    private courseService: CoursesStoreService,
    private courseHelper: FirstServiceService
  ) {
    console.log(this.courses);
  }

  ngOnInit(): void {
    this.coursesSubscription = this.courseService.getCourses().subscribe(
      (newCourses: Course[]) => { 
        this.courses = newCourses;
        console.log( this.courses);
       }
    );

    if (DEBUG) {
      setInterval(() => {
        // this.courses.push(courseList[0]);
      }, 2000);
    }
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
  }

  createCourse() {
    this.courseHelper.openCoureModal({
      title: '',
      description: '',
      price: null
    } as Course,
    'Create course');
  }

  private openModal(course: Course, title: string): Promise<any> {
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.modalTitle = title;
    modalRef.componentInstance.course = course;
    return modalRef.result;
  }
}
