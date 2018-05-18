import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DateUtilService {

  private weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public pad(n) {
    return n < 10 ? '0' + n : n;
  }

  public getWeekday(i:number) {
    return this.weekday[i];
  }
  public getMonth(i:number) {
    return this.month[i];
  }

}
