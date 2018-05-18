import { Component, Input } from '@angular/core';
import { MeetingViewModel } from '../../../common/api/models';
import { DateUtilService } from '../../../common/date-util.service';

@Component({
  selector:    'app-today-meetings',
  templateUrl: 'today-meetings.component.html',
  styleUrls:   ['today-meetings.component.scss']
})
export class TodayMeetingsComponent {
  @Input() public meetingsList: Array<MeetingViewModel> = [];
  @Input() public currentMeetingId: number;

  constructor(private dateUtils: DateUtilService) {

  }

  public pad(n) {
    return this.dateUtils.pad(n);
  }
}
