declare var require: any
var randomWords = require('random-words');
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  letters: any = [['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']]
  colors = [['white','white','white','white','white'],['white','white','white','white','white'],['white','white','white','white','white'],['white','white','white','white','white'],['white','white','white','white','white'],['white','white','white','white','white']]
  disabled=[[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false]]
  word:string='';
  guessedword: string = ''
  splited:string[]=[]
  count:number=0;
  htmlcounter:number[]=[0]
  userdata:any;
  constructor() { }

  ngOnInit(): void {
    while(true){
      this.word=randomWords({exactly: 1, minLength: 4, maxLength: 6})
      this.splited = this.word[0].split('')
      if(this.splited.length!=5){
      }
      else{
        console.log(this.word)
        break
      }

    }
  }

  move(e: any, p:any, c:any, n:any ,newline:number){
    let length = c.value.length;
    if(length == 1 && newline==0){
      if(n!="" ){
        n.focus();
        n.style
      }

    }
    if(e.key === "Backspace"){
      if(p!=""){
        p.focus()
      }
    }
    if(e.key==="Enter"){
      console.log(this.letters)

      n.focus();
      this.check();
    }
  }

  check(){
    for(let i =0; i<=5 ; i++){
      for(let j =0; j<=5 ; j++){
        if(this.letters[this.count][i]===this.splited[j]){
          if(i==j){
            this.colors[this.count][i]='green'
          }
          else{
            this.colors[this.count][i]='yellow'
          }
        }
        else{
        }
      }
      this.disabled[this.count][i]=true;
    }
    this.guessedword=this.letters[this.count].join('')
    if(this.guessedword==this.word[0] || this.count==5){
    }
    else{
      this.count = this.count+1;
      this.htmlcounter.push(this.count)
    }

  }

}
