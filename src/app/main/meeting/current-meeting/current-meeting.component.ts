import { Component, Input } from '@angular/core';
import { MeetingViewModel } from '../../../common/api/models';

@Component({
  selector:    'app-current-meeting',
  templateUrl: 'current-meeting.component.html',
  styleUrls:   ['current-meeting.component.css']
})
export class CurrentMeetingComponent {

  @Input() meeting: MeetingViewModel;

  constructor() {
  }
  public pad(n) {
    return n < 10 ? '0' + n : n;
  }
}
