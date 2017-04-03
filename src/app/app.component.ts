import { Component } from '@angular/core';
import { BoardComponent } from './Board/board.component';
import { calculateWinner } from './Board/BoardUtils';

@Component({
  selector: 'app-root',
  template: `
	<div class="sideLengthInput" >
	<input type="number" name="size" min="2" value="{{size}}" max="24" #box (change)="onKey(box.value)">
	</div>
	<div class="game">
	  	<board [squares]="history[current]" (onSquaresChanged)="addHistoryState($event)"
	  	 [sideLength]="size" class="Board" [gameOver]="gameOver" [xIsNext]="xIsNext" 
	  	 (onEmptySquareClicked)="onEmptySquareClicked($event)"></board>
 		<div>
	 		<div class="status">{{getBoardStatus()}}</div>
			<ol>
				<li *ngFor="let squares of history; let i=index;">
					<a href='#' (click)="setCurrent(i)">
						Move #{{i}}
					</a>
				</li>
			</ol>
		</div>
  	 </div>`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
	size: number;
	history : any[];
	current : number;
	gameOver : boolean;
	xIsNext : boolean;

	constructor(){
		this.size=3;
		this.initGame();
	}



	onKey(value: string){
		this.size = +value;	
		this.initGame();
	}

	initGame(){
		this.history = [];
		this.current = 0;
		this.history.push(Array(this.size).fill(0).map(()=>(new Array(this.size).fill(null))));
		this.gameOver = false;
		this.xIsNext=true;
	}

	addHistoryState(squares){
		let newHistory = this.history.slice(0,this.current+1);
		newHistory.push(squares);
		this.history = newHistory;
		this.current++;
	}

	onEmptySquareClicked(position){
		let {row,col} = position;
		let squares = JSON.parse(JSON.stringify(this.history[this.current]));
		if(!squares[row][col] && !this.gameOver){
			squares[row][col] = this.getNextPlayer();

			this.gameOver = calculateWinner(squares);
			
			this.addHistoryState(squares);
			this.toggleNextPlayer();
		}
	}

	toggleNextPlayer(){
		if(this.current%2==0){
			this.xIsNext=true;
		}else{
			this.xIsNext=false;
		}
	}

	getNextPlayer(){
		return this.xIsNext?'X':'O';
	}

	getBoardStatus(){ 
		if(this.gameOver){
			return "Player "+calculateWinner(this.history[this.current])+" won!";
		}else{
			return "Next player :"+this.getNextPlayer();
		}
	}

	setCurrent(index){
		this.current = index;	
		this.gameOver = calculateWinner(this.history[this.current]);
		this.toggleNextPlayer();
	}

}	