import { Component, Input } from '@angular/core';
import { MeetingViewModel } from '../../../common/api/models';

@Component({
  selector:    'app-today-meetings',
  templateUrl: 'today-meetings.component.html',
  styleUrls:   ['today-meetings.component.scss']
})
export class TodayMeetingsComponent {
  @Input() public meetingsList: Array<MeetingViewModel> = [];
  @Input() public currentMeetingId: number;
}
