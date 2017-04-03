import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
	selector:'square',
	template:'<button class="Square" (click)="triggerSquareClicked()">{{player}}</button>',
	styleUrls:['./square.component.css']
})

export class SquareComponent {
	@Input()
	player : string = '';

	@Output()
	onSquareClick = new EventEmitter();

	triggerSquareClicked(){
		this.onSquareClick.emit();
	}

}