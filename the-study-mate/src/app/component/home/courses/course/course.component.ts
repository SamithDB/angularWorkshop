import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;
  @Output() courseSelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(event: Event) {
    alert('You clicked ' + this.course.title);
    this.courseSelected.emit(this.course.title);
  }
}
