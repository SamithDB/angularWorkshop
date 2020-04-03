import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  DoCheck,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { Course } from 'src/app/models/course';
import { FirstServiceService } from 'src/app/services/first-service.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseEditModalComponent } from '../../my-courses/course-edit-modal/course-edit-modal.component';

const DEBUG = false;

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent
  implements OnInit, OnDestroy, DoCheck, AfterViewInit {
  @Input() course: Course;
  @Input() editable = false;
  @Output() courseSelected = new EventEmitter<Course>();
  inFocus = false;

  constructor(private el: ElementRef<HTMLElement>, 
    private courseHelper: FirstServiceService,
    private courseStore: CoursesStoreService,
    private modalService: NgbModal) {
    
    this.logIt('constructor');
  }

  ngOnInit(): void {
    this.courseHelper.anotherGreeting();
    this.logIt('ngOnInit');
    if (DEBUG) {
      setInterval(() => {
        this.course.price = Math.round(Math.random() * 100);
      }, 2000);
    }
  }

  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }

  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }

  // onClick(event: Event) {
  //   this.course.price += 10;
  //   this.courseSelected.emit(this.course);
  // }

  onMouseEnter() {
    this.inFocus = true;
  }

  onMouseLeave() {
    this.inFocus = false;
  }

  onEdit() {
    this.courseHelper.openCoureModal(this.course, "Edit course");
  }

  onDelete() {
    this.courseStore.deleteCourse( this.course);
  }

  logIt(checkpoint: string) {
    if (DEBUG) {
      console.log(
        'args at ' + checkpoint + ' - ' + JSON.stringify(this.course)
      );
      console.log(
        'view at ' + checkpoint + ' - ' + this.el.nativeElement.textContent
      );
    }
  }

}
