import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';

@Injectable()
export class Variables {
  appname = 'Werfen Metting Room Service';
  weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}
export const BASE_PATH = new InjectionToken<string>('basePath');