import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { Variables } from '../../common/variables';
import { BASE_PATH } from '../variables';
import {
  RoomViewModel,
} from './models';

/**
* Created with angular4-swagger-client-generator.
*/
@Injectable()
export class ApiClientService {


  private domain = "";

  constructor(protected globals: Variables, private http: HttpClient, protected i18nService: I18nService,
    @Optional() @Inject(BASE_PATH) basePath: string) {
    if (basePath) {
      this.domain = basePath;
    }
  }

  /**
  * Method ApiMeetingsGet
  * @param idMeeting This is a tool for control the meetings in the meetings rooms
  * @param idRoom This is a tool for control the meetings in the meetings rooms
  * @return Full HTTP response as Observable
  */
  public ApiMeetingsGet(idMeeting: number, idRoom: number, ): Observable<HttpResponse<any>> {
    let uri = `/api/meetings`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    if (idMeeting !== undefined && idMeeting !== null) {
      params = params.set('idMeeting', idMeeting + '');
    }
    if (idRoom !== undefined && idRoom !== null) {
      params = params.set('idRoom', idRoom + '');
    }
    return this.sendRequest<any>('get', uri, headers, params, null);
  }

  /**
  * Method ApiMeetingsPost
  * @return Full HTTP response as Observable
  */
  public ApiMeetingsPost(): Observable<HttpResponse<any>> {
    let uri = `/api/meetings`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, null);
  }

  /**
  * Method ApiRoomGet
  * @param id This is a tool for control the meetings in the meetings rooms
  * @return Full HTTP response as Observable
  */
  public ApiRoomGet(id: number, ): Observable<HttpResponse<any>> {
    let uri = `/api/room`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    if (id !== undefined && id !== null) {
      params = params.set('id', id + '');
    }
    return this.sendRequest<any>('get', uri, headers, params, null);
  }

  /**
  * Method ApiRoomPut
  * @param room item model
  * @return Full HTTP response as Observable
  */
  public ApiRoomPut(room: RoomViewModel, ): Observable<HttpResponse<any>> {
    let uri = `/api/room`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<any>('put', uri, headers, params, JSON.stringify(room));
  }

  /**
  * Method ApiRoomPost
  * @param room Room model
  * @return Full HTTP response as Observable
  */
  public ApiRoomPost(room: RoomViewModel, ): Observable<HttpResponse<any>> {
    let uri = `/api/room`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(room));
  }

  /**
  * Method ApiRoomDelete
  * @param id This is a tool for control the meetings in the meetings rooms
  * @return Full HTTP response as Observable
  */
  public ApiRoomDelete(id: number, ): Observable<HttpResponse<any>> {
    let uri = `/api/room`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    if (id !== undefined && id !== null) {
      params = params.set('id', id + '');
    }
    return this.sendRequest<any>('delete', uri, headers, params, null);
  }

  /**
  * Method ApiRoomAvailabilityGet
  * @return Full HTTP response as Observable
  */
  public ApiRoomAvailabilityGet(): Observable<HttpResponse<any>> {
    let uri = `/api/room/availability`;
    let headers = new HttpHeaders();
    let params = new HttpParams();
    return this.sendRequest<any>('get', uri, headers, params, null);
  }


  private sendRequest<T>(method: string, uri: string, headers: HttpHeaders, params: HttpParams, body: any): Observable<HttpResponse<T>> {
    if (method === 'get') {
      return this.http.get<T>(this.domain + uri, { headers: headers.set('Accept', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'put') {
      return this.http.put<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'post') {
      return this.http.post<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'delete') {
      return this.http.delete<T>(this.domain + uri, { headers: headers, params: params, observe: 'response' });
    } else {
      console.error('Unsupported request: ' + method);
      return Observable.throw('Unsupported request: ' + method);
    }
  }
}
