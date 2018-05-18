import { Component, Input } from '@angular/core';
import { MeetingViewModel } from '../../../common/api/models';

@Component({
  selector:    'app-next-meeting',
  templateUrl: './next-meeting.component.html',
  styleUrls:   ['./next-meeting.component.css']
})
export class NextMeetingComponent {

  @Input() meeting: MeetingViewModel;
  @Input() public meetingsList: Array<MeetingViewModel> = [];
  constructor() {
  }

  public pad(n) {
    return n < 10 ? '0' + n : n;
  }
}
