import { Component, Input, OnInit } from '@angular/core';
import { DateUtilService } from '../../../common/date-util.service';

@Component({
  selector:    'app-room-header',
  templateUrl: 'room-header.component.html',
  styleUrls:   ['room-header.component.scss']
})
export class RoomHeaderComponent implements OnInit {

  public day = '';
  public time = '';

  @Input() public image = '';
  @Input() public name = '';

  constructor(protected dateUtils: DateUtilService) {
  }

  public ngOnInit() {
    this.getTime();
    setInterval(() => this.getTime(), 1000);
  }

  public getTime() {
    const myDate = new Date();
    this.time = this.dateUtils.pad(myDate.getHours()) + ':' + this.dateUtils.pad(myDate.getMinutes());
    const d = this.dateUtils.getWeekday(myDate.getDay());
    const month = this.dateUtils.getMonth(myDate.getMonth());
    this.day = d + ', ' + month + ' ' + myDate.getDate();
  }
}
