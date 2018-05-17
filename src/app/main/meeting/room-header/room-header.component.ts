import { Component, Input } from '@angular/core';

@Component({
  selector:    'app-room-header',
  templateUrl: 'room-header.component.html',
  styleUrls:   ['room-header.component.scss']
})
export class RoomHeaderComponent {

  @Input() public day = '';
  @Input() public time = '';

  @Input() public image = '';
  @Input() public name = '';

  constructor() {
  }

}
