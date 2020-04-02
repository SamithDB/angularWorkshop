import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(private coursesStore: CoursesStoreService) {}

  ngOnInit(): void {
    this.coursesStore.getCourses().subscribe(
      (newCourses: Course[]) => this.courses = newCourses 
    );
  }

  onCourseSelect(course: Course) {
    alert('Course selected ' + course.title);
  }
}
