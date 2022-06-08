import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentDetailComponent, 
    StudentsListComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule, 
    FormsModule
  ]
})
export class StudentsModule { }
