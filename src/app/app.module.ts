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
import { ApiClientService } from "../app/common/api/index.service";
import { Variables, BASE_PATH } from '../app/common/variables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MeetingComponent } from './main/meeting/meeting.component';
import { SelectMeetingComponent } from './main/select-meeting/select-meeting.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MeetingComponent,
    SelectMeetingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SystelabTranslateModule.forRoot(),
    SystelabPreferencesModule.forRoot(),
    SystelabComponentsModule.forRoot(),
    SystelabChartsModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiClientService, Variables,
    { provide: BASE_PATH, useValue: environment.BASE_PATH },
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
