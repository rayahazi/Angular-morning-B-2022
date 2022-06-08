import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsListComponent } from './lessons-list/lessons-list.component';

const routes: Routes = [
  {path: 'lessons', component: LessonsListComponent},
  // {path: 'students', component: StudentsListComponent},
  // When we come to `localhost:4200` - it will go to: `localhost:4200/students`
  {path: '', redirectTo: '/students', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
