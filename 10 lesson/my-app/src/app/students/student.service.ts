import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { STUDENTS } from './dummy-data-students';
import Student from './Student';

@Injectable({
  // There is only 1 instance for StudentService
  providedIn: 'root'
})

export class StudentService {

  constructor() { }

  // A function to return the students array:
  getStudents():Observable<Student[]> {
    return of(STUDENTS);
  }

  // pipe vs substcribe
  getStudent(id: number | string){
    return this.getStudents().pipe(
      // + - before `id` - turns a string into a number
      map((student: Student[]) => student.find((s) => s.id === +id)!)
    );
  }
}
