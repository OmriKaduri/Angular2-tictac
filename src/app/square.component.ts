import {Component, Input} from '@angular/core';

@Component({
	selector:'square',
	template:'<button class="Square">{{player}}</button>',
	styleUrls:['./square.component.css']
})

export class SquareComponent {
	@Input()
	player : string = '';
}