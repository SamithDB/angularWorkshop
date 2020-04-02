import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { courseList } from '../../data/courses-list';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  
  course: Course;
  
  constructor(private thisRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.thisRoute.snapshot.paramMap.get('id');
    this.course = courseList.find( c => c.title === id);
  }
}
