import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Sport } from '../Models/Sports';


@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http:HttpClient) { }

  private apiCall ='https://localhost:44330/api/sport';
  getSports():Observable<Sport[]>
  {
    return this.http.get<Sport[]>(this.apiCall);
  }
}
