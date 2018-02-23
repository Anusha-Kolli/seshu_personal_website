import { Component, OnInit } from '@angular/core';
import { QuestionService} from '../question.service';
import {Question} from '../questions'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[QuestionService]
  
})
export class ContactsComponent implements OnInit {
  questions : Question[];
  question : Question;
  name:String;
  email:String;
  quest:String;
 
  constructor(private QuestionService:QuestionService) { }

  addQuestion(){
    const newQuestion = {
      name : this.name,
      email: this.email,
      quest: this.quest
    }
    this.QuestionService.addQuestion(newQuestion)
     .subscribe(question =>{
      this.questions.push(question);
      this.QuestionService.getQuestions()
      .subscribe(questions =>
      this.questions = questions);
      this.name='';
      this.email = '';
      this.quest = '';
     })      
  }

  ngOnInit() {
    this.QuestionService.getQuestions()
    .subscribe(questions =>
    this.questions = questions);
  }

}
