import { Component } from '@angular/core';
import Questions from './Questions';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {

  // create survey object to store user input:
  public mySurvey:Questions = new Questions();

  // arrays:
  cities:string[] = ['Jerusalem', 'Petah-Tikva', 'Ariel']
  VotedForArr = [{selected:false, value:'AAA'},{selected:false, value:'BBB'},{selected:false, value:'CCC'}]
  isChecked:boolean = false

  getColor(e:any){
    this.mySurvey.FavColor = e.target.value;
  }

  getCity(e:any){
    this.isChecked = !this.isChecked;
    this.mySurvey.City = e.target.value;
  }

  getVotedFor(e:any){
    this.mySurvey.VotedFor = e.target.value;
  }

}
