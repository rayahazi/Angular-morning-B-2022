import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import Student from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student:Observable<Student>;

  constructor(private service: StudentService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.student = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getStudent(params.get("id")))
    );
  }

  goBack(){
    // router.navigate() - a function that gets an array of values(parameters), 
    // and go to that URL in the website. 
    this.router.navigate(['/students']);
  }
}
