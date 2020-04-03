import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { FiltersComponent } from './components/home/filters/filters.component';
import { CoursesComponent } from './components/home/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseComponent } from './components/shared/course/course.component';
import { HighlightableDirective } from './directives/highlightable.directive';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { HomeComponent } from './components/home/home.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BackHomeButtonComponent } from './components/back-home-button/back-home-button.component';
import { CourseEditModalComponent } from './components/my-courses/course-edit-modal/course-edit-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'my-courses', component: MyCoursesComponent },
  { path: 'about', component: NotImplementedComponent },
  { path: 'contact', component: NotImplementedComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent },
  { path: 'access-denied', component: AccessDeniedComponent },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthorizationGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    FiltersComponent,
    CoursesComponent,
    FooterComponent,
    CourseComponent,
    HighlightableDirective,
    EllipsisPipe,
    HomeComponent,
    MyCoursesComponent,
    CourseDetailsComponent,
    NotImplementedComponent,
    PageNotFoundComponent,
    BackHomeButtonComponent,
    CourseEditModalComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
