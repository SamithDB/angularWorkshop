import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  constructor(private firestore: AngularFirestore) {
  }

  public generateId(): string {
    return this.firestore.createId();
  }

  getCourses(): Observable<Course[]> {
    return this.firestore.collection<Course>('courses').valueChanges();
  }

  createCourse(course: Course) {
    course.id = this.generateId()
    this.firestore.collection('courses')
    .doc<Course>(course.id)
    .set(course);
  }

  updateCourse(course: Course) {
    this.firestore.collection('courses')
    .doc<Course>(course.id)
    .update(course);
  }

  deleteCourse(course: Course) {
    this.firestore.collection('courses')
    .doc<Course>(course.id)
    .delete();
  }
}
