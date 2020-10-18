import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { jsonpFactory } from '@angular/http/src/http_module';
import { Observable } from 'rxjs';
import {DatabaseService} from "../services/db.service";
export class CreateQuiz1s {
  public name: string;
  public age: number;
  public gender: string;

}
@Component({
  selector: 'app-createasurvey',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css'],
  providers:[DatabaseService]
})


export class TakeQuiz implements OnInit {


  public  quections = [];


data: Array<any>
totalRecords:string
page:Number=1
results:string
 result:string;
  options = [
    { value: '1', label: 'Choose Gender' },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
 
  ];
  selectedValue = '1';
    constructor(private database: DatabaseService) { 

  }
 
  getq(){

    this.database.getQuection("").subscribe(data => this.quections = data);
    console.log('new',this.data)
    console.log('countQuections',this.totalRecords)
  }

  onSubmit(formValues: JSON) {        

  }

  model = new CreateQuiz1s();
  getQuctions(){  
  }

  ngOnInit(): void {
    this.getQuctions();
    this.getq();
  }

  getSelectedValue(value: any) {
    this.model.gender=value;
  }
  
  btnClick(){

  }
}
