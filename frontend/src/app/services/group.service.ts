import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private apiUrl = 'http://localhost:3000/api/groups';  // Update with your API URL

  constructor(private http: HttpClient) { }

  getGroups(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getGroup(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createGroup(group: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, group);
  }

  updateGroup(id: string, group: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, group);
  }

  deleteGroup(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
