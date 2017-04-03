import { TestBed, async } from '@angular/core/testing';

import {SquareComponent} from './../Square/square.component';
import {SquareRowComponent} from './square-row.component';

describe('SquareRowComponent', () => {
	beforeEach(async(()=>{
		TestBed.configureTestingModule({
			declarations:[
				SquareComponent,
				SquareRowComponent
			],
		}).compileComponents();
	}));

	it('should create the square-row', async() => {
	    const fixture = TestBed.createComponent(SquareRowComponent);
    	const squarerow = fixture.debugElement.componentInstance;
   		expect(squarerow).toBeTruthy(); 
	});

	it('should create square-row with empty values', async() => {
		const fixture = TestBed.createComponent(SquareRowComponent);
    	fixture.detectChanges();
    	const compiled = fixture.debugElement.nativeElement;
		let buttons = compiled.querySelectorAll('button');
		buttons.forEach(function(button){
			expect(button.textContent).toEqual('');
		});
		expect(buttons.length).toEqual(fixture.componentInstance.rows.length);
	});

	it('should create square-row with X,X,X values', async() => {
		const fixture = TestBed.createComponent(SquareRowComponent);
		fixture.componentInstance.rows=["X","X","X"];
    	fixture.detectChanges();
    	const compiled = fixture.debugElement.nativeElement;
		let buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
		buttons.forEach(function(button){
			expect(button.textContent).toEqual('X');
		});
		expect(buttons.length).toEqual(fixture.componentInstance.rows.length);
	});
});
