import {Component, Input, Output, EventEmitter} from '@angular/core';
import {SquareComponent} from './../Square/square.component';

@Component({
	selector: 'square-row',
	template: `
	<div class="board-row">
		<square *ngFor="let square of rows; let i=index;" [player]='square' (onSquareClick)="onSquareClicked(i)"></square>
	</div>
	`,styleUrls:['./square-row.component.css']
})
export class SquareRowComponent{
	@Input()
	rows : string[] = Array(3).fill('');
	@Input()
	index: number = 0;

	@Output()
	onRowClick = new EventEmitter();

	onSquareClicked(colindex){
		this.onRowClick.emit(colindex);
	}
}