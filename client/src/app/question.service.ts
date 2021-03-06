import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Question} from './questions';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {

  constructor(private http: Http) { };
  getQuestions(){
    return this.http.get('http://localhost:3000/api/questions')
    .map(res=> res.json());
      
  }
  addQuestion(newQuestion){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/question',newQuestion,{headers:headers})
     .map(res=>res.json());
  }


}
