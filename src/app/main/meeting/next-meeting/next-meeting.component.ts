import { Component, Input } from '@angular/core';
import { MeetingViewModel } from '../../../common/api/models';
import { DateUtilService } from '../../../common/date-util.service';

@Component({
  selector:    'app-next-meeting',
  templateUrl: './next-meeting.component.html',
  styleUrls:   ['./next-meeting.component.css']
})
export class NextMeetingComponent {

  @Input() public meetingsList: Array<MeetingViewModel> = [];
  constructor(private dateUtils: DateUtilService) {
  }

  public pad(n) {
    return this.dateUtils.pad(n);
  }
}