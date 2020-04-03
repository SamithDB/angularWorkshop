import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SliderComponent } from './components/admin-dashboard/slider/slider.component';
import { ContactComponent } from './components/admin-dashboard/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: SliderComponent},
      { path: 'contact', component: ContactComponent},
    ]
  }
]


@NgModule({
  declarations: [
    AdminDashboardComponent,
    SliderComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
  ],
  exports: [
    AdminDashboardComponent
  ]
})
export class AdminModule { }
