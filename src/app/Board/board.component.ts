import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {SquareRowComponent} from './square-row.component';
import {calculateWinner} from './BoardUtils';

@Component({
	selector: 'board',
	template: `
	<div class="Board">
		<square-row *ngFor="let row of squares; let i=index;" [rows]="row" [index]="i" 
		(onRowClick)="onClick(i,$event)"></square-row>
	</div>
	`,styleUrls:['./board.component.css']
})
export class BoardComponent {
	@Input()
	sideLength: number = 3;

	@Input()
	squares: string[][];

	@Input()
	xIsNext : boolean;

	@Input()
	gameOver : boolean;

	@Output()
	onEmptySquareClicked = new EventEmitter();

	constructor(){
		this.xIsNext = true;	
	}

	onClick(row,col){
		if(!this.squares[row][col] && !this.gameOver){
			this.onEmptySquareClicked.emit({row:row,col:col});
		}
	}
}