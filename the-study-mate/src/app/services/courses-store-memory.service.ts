import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreMemoryService {
  private courses: Course[]; 

  private coursesObservable: Subject<Course[]>;

  constructor() {
    this.coursesObservable = new BehaviorSubject(this.courses);
  }

  public generateId(): string {
    return Math.round(Math.random() * 10000) + '';
  }

  getCourses(): Observable<Course[]> {
    return this.coursesObservable;
  }

  createCourse(course: Course) {
    course.id = this.generateId()
    this.courses.push(course);
    this.coursesObservable.next([...this.courses]);
  }

  updateCourse(course: Course) {
    const idx = this.courses.findIndex(
      thisCourse => course.id === thisCourse.id
    );
    this.courses[idx] = course;
    this.coursesObservable.next([...this.courses]);
  }

  deleteCourse(course: Course) {
    const idx = this.courses.findIndex(
      thisCourse => course.id === thisCourse.id
    );
    this.courses.splice(idx, 1);
    this.coursesObservable.next([...this.courses]);
  }
}
