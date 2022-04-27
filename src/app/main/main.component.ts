declare var require: any
var randomWords = require('random-words');
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  letters: any = [['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']]
  colors = [['white','white','white','white','white'],['white','white','white','white','white'],['white','white','white','white','white'],['white','white','white','white','white'],['white','white','white','white','white']]
  disabled=[[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false]]
  word:string='';
  splited:string[]=[]
  count:number=0;
  htmlcounter:number[]=[0]
  constructor() { }

  ngOnInit(): void {
    while(true){
      this.word=randomWords({exactly: 1, minLength: 4, maxLength: 6})
      this.splited = this.word[0].split('')
      if(this.splited.length!=5){
        console.log("Jeszcze raz")
      }
      else{
        console.log(this.word, this.splited, this.splited.length)
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
    for(let i =0; i<=4 ; i++){
      for(let j =0; j<=4 ; j++){
        if(this.letters[this.count][i]===this.splited[j]){
          if(i==j){
            this.colors[this.count][i]='green'
            console.log("kolor zielony-","Litera podana=",this.letters[this.count][i],", Litera zgadywana=",this.splited[j] , this.count, i , j)
          }
          else{
            this.colors[this.count][i]='yellow'
            console.log("kolor żółty-","Litera podana=",this.letters[this.count][i],", Litera zgadywana=",this.splited[j] , this.count, i , j)
          }
        }
        else{
        }
      }
      this.disabled[this.count][i]=true;
    }
    this.count = this.count+1;
    this.htmlcounter.push(this.count)
  }

}
