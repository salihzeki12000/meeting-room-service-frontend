import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector:    'app-room-status',
  templateUrl: 'room-status.component.html',
  styleUrls:   ['room-status.component.scss']
})
export class RoomStatusComponent {

  public listOpen = false;

  @Input() public meetingId: number;
  @Output() public toogleMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  public openMenu() {
    this.listOpen = !this.listOpen;
    this.toogleMenu.emit(this.listOpen);
  }
}
