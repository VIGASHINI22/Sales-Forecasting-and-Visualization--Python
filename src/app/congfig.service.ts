import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongfigService {

  constructor(private http:HttpClient) { }

  post(file:any):Observable<any>
  {
    return this.http.post("http://localhost:5000/FILE",file)
  }
}
 