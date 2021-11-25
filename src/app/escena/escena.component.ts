import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input()frases: string[] = [];

  currentSentence: number = 0;
  

  prev(): void {
    const newSentence: number = this.currentSentence - 1;
    
    if (newSentence < 0) {

      this.currentSentence = this.frases.length - 1;
      
    } else {
      this.currentSentence = newSentence;
    }
    
  }
  next(): void {
    const newSentence: number = this.currentSentence + 1;
    
    if (newSentence >= this.frases.length) {

      this.currentSentence = 0;
      
    } else {
      this.currentSentence = newSentence;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
