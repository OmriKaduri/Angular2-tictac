import { TestBed, async } from '@angular/core/testing';

import {SquareComponent} from './square.component';

describe('SquareComponent', () => {
	beforeEach(async(()=>{
		TestBed.configureTestingModule({
			declarations:[
				SquareComponent
			],
		}).compileComponents();
	}));

	it('should create the square', async() => {
	    const fixture = TestBed.createComponent(SquareComponent);
    	const square = fixture.debugElement.componentInstance;
   		expect(square).toBeTruthy(); 
	});

	it('should create square with value `X`', async() => {
		const fixture = TestBed.createComponent(SquareComponent);
    	fixture.componentInstance.player='X';
    	fixture.detectChanges();
    	const compiled = fixture.debugElement.nativeElement;
    	expect(compiled.querySelector('button').textContent).toContain('X');

	});
});
