import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private apiUrl = 'http://localhost:3000/api/channels';  // Update with your API URL

  constructor(private http: HttpClient) { }

  getChannels(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getChannel(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createChannel(channel: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, channel);
  }

  updateChannel(id: string, channel: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, channel);
  }

  deleteChannel(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
