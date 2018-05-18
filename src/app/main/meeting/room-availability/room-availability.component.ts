import { Component, OnInit } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { ApiClientService } from '../../../common/api/index.service';
import { RoomViewModel } from '../../../common/api/models';

@Component({
  selector:    'app-room-availability',
  templateUrl: 'room-availability.component.html',
  styleUrls:   ['room-availability.component.scss']
})
export class RoomAvailabilityComponent implements OnInit {
  public roomsList: Array<RoomViewModel> = [];
  constructor(protected i18nService: I18nService, protected data: ApiClientService) { }

  public ngOnInit() {
    this.loadAvailability();
    setInterval(() => this.loadAvailability(), 60000);
  }
  public loadAvailability() {
    this.roomsList = [];
    this.data.ApiRoomAvailabilityGet().subscribe((res) => {
      for (let i = 0; i < res.body.length; i++) {
        const rm = new RoomViewModel();
        rm.id = res.body[i].id;
        rm.name = res.body[i].name;
        rm.free = res.body[i].free;
        this.roomsList.push(rm);
      };
    });
  }

}
