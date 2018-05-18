import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { SystelabChartsModule } from 'systelab-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app.routing';
import { BASE_PATH } from '../app/common/variables';
import { AgGridModule } from 'ag-grid-angular';
import { DndModule } from 'ng2-dnd';
import { MeetingComponent } from './main/meeting/meeting.component';
import { SelectMeetingComponent } from './main/select-meeting/select-meeting.component';
import { environment } from '../environments/environment';
import { RoomAvailabilityComponent } from './main/meeting/room-availability/room-availability.component';
import { RoomHeaderComponent } from './main/meeting/room-header/room-header.component';
import { RoomStatusComponent } from './main/meeting/room-status/room-status.component';
import { CurrentMeetingComponent } from './main/meeting/current-meeting/current-meeting.component';
import { NextMeetingComponent } from './main/meeting/next-meeting/next-meeting.component';
import { GridHeaderContextMenuComponent } from 'systelab-components/widgets/grid/contextmenu/grid-header-context-menu.component';
import { GridContextMenuComponent } from 'systelab-components/widgets/grid/contextmenu/grid-context-menu.component';

@NgModule({
  declarations:    [
    AppComponent,
    MainComponent,
    MeetingComponent,
    SelectMeetingComponent,
    RoomAvailabilityComponent,
    RoomHeaderComponent,
    RoomStatusComponent,
    CurrentMeetingComponent,
    NextMeetingComponent
  ],
  imports:         [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SystelabTranslateModule.forRoot(),
    SystelabPreferencesModule.forRoot(),
    SystelabComponentsModule.forRoot(),
    SystelabChartsModule.forRoot(),
    AgGridModule.withComponents([
      GridContextMenuComponent,
      GridHeaderContextMenuComponent
    ]),
    DndModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers:       [
    {provide: BASE_PATH, useValue: environment.BASE_PATH},
  ],
  entryComponents: [],
  bootstrap:       [AppComponent]
})
export class AppModule {
}
