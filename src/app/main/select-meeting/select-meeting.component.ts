import { Component, OnInit, Input } from '@angular/core';
import { RoomViewModel } from '../../common/api/models';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { ApiClientService } from '../../common/api/index.service';
import { Router } from '@angular/router';
import { Variables } from '../../common/variables';

@Component({
  selector: 'app-select-meeting',
  templateUrl: './select-meeting.component.html',
  styleUrls: ['./select-meeting.component.scss']
})
export class SelectMeetingComponent implements OnInit {
  @Input() loc: number;
  public idMeeting = 0;
  public desCombo = '';
  public comboOptionList: Array<Object> = [];
  public location = '';
  constructor(protected i18nService: I18nService, protected data: ApiClientService, private router: Router, protected globals: Variables) {
    i18nService.get('COMMON_SELECT_MEETING_ROOM').subscribe((res) => {
      this.desCombo = res;
    });
    this.location = router.url;
  }

  ngOnInit() {
    this.loadMeetingRooms();
  }
  public comboChangeEvent(event: any): void {
    this.idMeeting = event.id;
    window.location.assign('/#/meeting/' + event.id);
    if (this.loc == 1) {
      window.location.reload();
    }

  }
  public loadMeetingRooms() {
    this.data.ApiRoomGet(0).subscribe((res) => {
      for (let i = 0; i < res.body.length; i++) {
        this.comboOptionList.push({ description: res.body[i].name, id: res.body[i].id });
      };
    });
  }
}
