import { Component, OnInit } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { ApiClientService } from '../../common/api/index.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetingViewModel, RoomViewModel } from '../../common/api/models';
import { Variables } from '../../common/variables';

@Component({
  selector:    'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls:   ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
  public meetingsList: Array<MeetingViewModel> = [];
  public id: number;
  public currentMeeting = new MeetingViewModel();
  public nextMeeting = new MeetingViewModel();
  public room = new RoomViewModel();
  public listOpen = false;
  public time = '';
  public day = '';

  constructor(protected i18nService: I18nService, protected data: ApiClientService, private router: Router, protected activatedRoute: ActivatedRoute, protected global: Variables) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadMeetings(this.id);
    this.loadRoomInfo(this.id);
    this.getTime();
    this.scheduleTasks();
    setInterval(() => this.getTime(), 1000);
    setInterval(() => this.loadMeetings(this.id), 60000);
    setInterval(() => this.scheduleTasks(), 300000);

  }

  public scheduleTasks() {
    this.data.ApiMeetingsPost()
      .subscribe((res) => {
      });
  }

  public getTime() {
    const myDate = new Date();
    this.time = this.pad(myDate.getHours()) + ':' + this.pad(myDate.getMinutes());
    const d = this.global.weekday[myDate.getDay()];
    const month = this.global.month[myDate.getMonth()];
    this.day = d + ', ' + month + ' ' + myDate.getDate();
  }

  public loadMeetings(id) {
    this.meetingsList = [];
    this.data.ApiMeetingsGet(0, id)
      .subscribe((res) => {
        for (let i = 0; i < res.body.length; i++) {
          const meet = new MeetingViewModel();
          meet.id = res.body[i].idMeeting;
          meet.endDateTime = new Date(res.body[i].endDateTime);
          meet.IdLotus = res.body[i].idLotus;
          meet.Link = '';
          meet.roomName = res.body[i].roomName;
          meet.startDateTime = new Date(res.body[i].startDateTime);
          meet.who = res.body[i].who;
          this.meetingsList.push(meet);
        }
        this.getCurrentMeeting();
      });
  }

  public getCurrentMeeting() {
    const now = new Date();
    let value = 0;
    for (let i = 0; i < this.meetingsList.length; i++) {
      if (!this.currentMeeting.id) {
        const start = this.meetingsList[i].startDateTime;
        const end = this.meetingsList[i].endDateTime;
        if (now > start && now < end) {
          value = 1;
          this.currentMeeting.id = this.meetingsList[i].id;
          this.currentMeeting.endDateTime = end;
          this.currentMeeting.IdLotus = this.meetingsList[i].IdLotus;
          this.currentMeeting.roomName = this.meetingsList[i].roomName;
          this.currentMeeting.who = this.meetingsList[i].who;
          this.currentMeeting.startDateTime = start;
          if (this.meetingsList[i + 1]) {
            this.nextMeeting.id = this.meetingsList[i + 1].id;
            this.nextMeeting.endDateTime = new Date(this.meetingsList[i + 1].startDateTime);
            this.nextMeeting.IdLotus = this.meetingsList[i + 1].IdLotus;
            this.nextMeeting.roomName = this.meetingsList[i + 1].roomName;
            this.nextMeeting.who = this.meetingsList[i + 1].who;
            this.nextMeeting.startDateTime = new Date(this.meetingsList[i + 1].endDateTime);
          }
        }
      }
    }
    if (!this.nextMeeting.id) {
      for (let i = 0; i < this.meetingsList.length; i++) {
        if (!this.nextMeeting.id) {
          const start = this.meetingsList[i].startDateTime;
          const end = this.meetingsList[i].endDateTime;
          if (start > now) {
            this.nextMeeting.id = this.meetingsList[i].id;
            this.nextMeeting.endDateTime = start;
            this.nextMeeting.IdLotus = this.meetingsList[i].IdLotus;
            this.nextMeeting.roomName = this.meetingsList[i].roomName;
            this.nextMeeting.who = this.meetingsList[i].who;
            this.nextMeeting.startDateTime = end;
          }
        }
      }
    }
    if (value === 0) {
      this.currentMeeting = new MeetingViewModel();
    }
  }

  public toogleRoomsOrEvents(status: boolean) {
    this.listOpen = status;
  }

  public loadRoomInfo(id) {
    this.data.ApiRoomGet(id)
      .subscribe((res) => {
        this.room.id = res.body.id;
        this.room.idLotus = res.body.idLotus;
        this.room.name = res.body.name;
        this.room.image = '/img/' + res.body.name + '.jpg';
      });
  }

  public pad(n) {
    return n < 10 ? '0' + n : n;
  }
}
