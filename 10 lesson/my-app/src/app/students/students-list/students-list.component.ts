import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Student from '../Student';
import { StudentService } from '../student.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  // Array of students - get from service
  students: Observable<Student[]>;
  selectedId:number = 0;

  // Call the service in the ctor:
  constructor(private service: StudentService, private route:ActivatedRoute) { }

  // call the function when a class is loaded:
  // paramMap - list of all params in URL
  // localhost:4200/student/:id
  ngOnInit(): void {

    // this.students will hold the value that returns from getStudents() in service. 
    this.students = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id'));
        return this.service.getStudents();
      })
    )
  }

}
