import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[] = Array(9).fill(null)
  xIsNext: boolean = false;
  winner: string = ''

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = ""
  }

  makeMove(idx: number){
    if(!this.squares[idx]){
      this.squares.splice(idx,1,this.player)
    }
  }

}
