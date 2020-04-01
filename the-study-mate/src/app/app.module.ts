import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FiltersComponent } from './component/home/filters/filters.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CoursesComponent } from './component/home/courses/courses.component';
import { CourseComponent } from './component/home/courses/course/course.component';
import { FooterComponent } from './component/footer/footer.component';
import { HighlightableDirective } from './directive/highlightable.directive';
import { EllipsisPipe } from './pipe/ellipsis.pipe';
import { HomeComponent } from './component/home/home.component';
import { MyCoursesComponent } from './component/my-courses/my-courses.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BackHomeComponent } from './component/back-home/back-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'my-courses', component: MyCoursesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'course-detail/:id', component: CourseDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FiltersComponent,
    CarouselComponent,
    CoursesComponent,
    CourseComponent,
    FooterComponent,
    HighlightableDirective,
    EllipsisPipe,
    HomeComponent,
    MyCoursesComponent,
    ContactComponent,
    AboutComponent,
    CourseDetailsComponent,
    PageNotFoundComponent,
    BackHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
