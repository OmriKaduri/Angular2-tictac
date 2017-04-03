import { TestBed, async } from '@angular/core/testing';

import {BoardComponent} from './board.component';
import {SquareRowComponent} from './square-row.component';
import {SquareComponent} from './../Square/square.component';

describe('BoardComponent', () => {
	beforeEach(async(()=>{
		TestBed.configureTestingModule({
			declarations:[
				BoardComponent,
				SquareRowComponent,
				SquareComponent
			]
		}).compileComponents();

	}));

	it('should create the board',async() => {
		const fixture = TestBed.createComponent(BoardComponent);
		const board = fixture.debugElement.componentInstance;
		expect(board).toBeTruthy();
	});

	it('should create 3 rows when not given sideLength input', async() => {
		const fixture = TestBed.createComponent(BoardComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		const component = fixture.componentInstance;
		let squarerows = compiled.querySelectorAll('square-row');
		expect(component.sideLength).toEqual(squarerows.length);
		expect(component.squares).toEqual(new Array(component.sideLength).fill(0).map(()=>(
			new Array(component.sideLength).fill(null))));
	});

	it('should create 5 rows when given sideLength 5', async() => {
		const fixture = TestBed.createComponent(BoardComponent);
		fixture.componentInstance.sideLength = 5;
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		const component = fixture.componentInstance;
		let squarerows = compiled.querySelectorAll('square-row');
		expect(component.sideLength).toEqual(squarerows.length);
	});
});