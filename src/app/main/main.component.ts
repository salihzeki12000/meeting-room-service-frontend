import { Component } from '@angular/core';
import '../fullscreen';
declare var fullScreen: any;
declare var fullScreenOut: any;
@Component({
	selector: 'main',
	templateUrl: 'main.component.html',
	styleUrls: ['main.component.scss']
})
export class MainComponent {

	constructor() {
	}
	public full() {
		new fullScreen();
	}
	public fullOut() {
		new fullScreenOut();
	}
}
