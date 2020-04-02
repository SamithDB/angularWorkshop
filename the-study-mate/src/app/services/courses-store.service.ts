import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private courses: Course[] = [
    {
      id: this.generateId(),
      title: 'Angular workshop',
      imgUrl: 'assets/angular-3-logo.png',
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    },
    {
      id: this.generateId(),
      title: 'React workshop',
      imgUrl: 'assets/angular-3-logo.png',
      price: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    },
    {
      id: this.generateId(),
      title: 'Vue workshop',
      imgUrl: 'assets/angular-3-logo.png',
      price: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    },
    {
      id: this.generateId(),
      title: 'Backbone workshop',
      imgUrl: 'assets/angular-3-logo.png',
      price: 30,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    },
    {
      id: this.generateId(),
      title: 'Knockout workshop',
      imgUrl: 'assets/angular-3-logo.png',
      price: 30,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!'
    }
  ];

  private coursesObservable: Subject<Course[]>;

  constructor() {
    this.coursesObservable = new BehaviorSubject(this.courses);
  }

  public generateId(): number {
    return Math.round(Math.random() * 10000);
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
