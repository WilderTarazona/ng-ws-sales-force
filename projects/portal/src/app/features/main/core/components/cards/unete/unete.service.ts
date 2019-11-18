import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'projects/portal/src/environments/environment';
import { ProfileModel } from '@portal/core/models';

@Injectable({
  providedIn: 'root'
})
export class UneteService {
  constructor(private http: HttpClient) { }

  getToken(profile: ProfileModel): Observable<any> {
    // const headers: HttpHeaders = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    // return this.http.post<any>(this.url, user, { headers: headers });
    const url = environment.ENDPOINTS.UNETE_URL_EXTERNAL;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<{type: number, detail: { accessToken: string }}>(url, profile, httpOptions);
  }
}
