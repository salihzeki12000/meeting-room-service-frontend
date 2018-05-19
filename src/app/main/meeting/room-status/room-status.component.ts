import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-room-status',
	templateUrl: 'room-status.component.html',
	styleUrls: ['room-status.component.scss']
})
export class RoomStatusComponent {

	@Input() public meetingId: number;

	constructor() {
	}

}
