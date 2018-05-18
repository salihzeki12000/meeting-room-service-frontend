import { Component, Input } from '@angular/core';
import { MeetingViewModel } from '../../../common/api/models';
import { DateUtilService } from '../../../common/date-util.service';

@Component({
  selector:    'app-current-meeting',
  templateUrl: 'current-meeting.component.html',
  styleUrls:   ['current-meeting.component.css']
})
export class CurrentMeetingComponent {

  @Input() meeting: MeetingViewModel;

  constructor(private dateUtils: DateUtilService) {
  }

  public pad(n) {
    return this.dateUtils.pad(n);
  }
}
