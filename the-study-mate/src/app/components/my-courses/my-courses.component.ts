import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CourseEditModalComponent } from './course-edit-modal/course-edit-modal.component';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

const DEBUG = false;

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courses: Course[];

  constructor(
    private modalService: NgbModal,
    private courseService: CoursesStoreService
  ) {
    console.log(this.courses);
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
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

  createCourse() {
    this.openModal(
      {
        title: '',
        description: '',
        price: null
      } as Course,
      'Create course'
    ).then(
      value => {
        this.courseService.createCourse(value);
      },
      reason => console.log(reason)
    );
  }

  onCourseEdit(course: Course) {
    this.openModal(course, 'Edit course').then(
      modifiedCourse => {
        console.log( modifiedCourse);
        this.courseService.updateCourse(modifiedCourse);
      },
      reason => console.log(reason)
    );
  }

  onCourseDelete(course: Course) {
    this.courseService.deleteCourse(course);
  }

  private openModal(course: Course, title: string): Promise<any> {
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.modalTitle = title;
    modalRef.componentInstance.course = course;
    return modalRef.result;
  }
}
