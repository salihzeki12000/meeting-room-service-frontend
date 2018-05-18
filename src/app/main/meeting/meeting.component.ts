import { Component, OnInit } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { ApiClientService } from '../../common/api/index.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetingViewModel, RoomViewModel } from '../../common/api/models';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
  public meetingsList: Array<MeetingViewModel> = [];
  public id: number;
  public currentMeeting = new MeetingViewModel();
  public room = new RoomViewModel();

  constructor(protected i18nService: I18nService, protected data: ApiClientService, private router: Router, protected activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  public ngOnInit() {
    this.loadMeetings(this.id);
    this.loadRoomInfo(this.id);
    this.scheduleTasks();
    const myDate = new Date();
    if (myDate.getHours() < 20 && myDate.getHours() > 7) {
      setInterval(() => this.loadMeetings(this.id), 60000);
      setInterval(() => this.scheduleTasks(), 300000);
    }
  }

  public scheduleTasks() {
    this.data.ApiMeetingsPost()
      .subscribe((res) => {
      });
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
    let meetingsListDeleted: Array<MeetingViewModel> = [];
    for (let i = 0; i < this.meetingsList.length; i++) {
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
      }
      if (now < start) {
        meetingsListDeleted.push(this.meetingsList[i]);
      }
    }
    if (value === 0) {
      this.currentMeeting = new MeetingViewModel();
    }
    this.meetingsList = meetingsListDeleted;
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

}