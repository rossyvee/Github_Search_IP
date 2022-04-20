import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  searchUsername(username:string): Observable<any> {
    return this.http.get(environment.apiUrl+"/search/users?q="+username)
  }

  fetchUser(username:string): Observable<any>{
    return this.http.get(environment.apiUrl+"/users/"+username)
  }

  fetchFollowers(username:string): Observable<any>{
    return this.http.get(environment.apiUrl+"/followers/"+username)
  }

  fetchRepositories(username:string): Observable<any>{
    return this.http.get(environment.apiUrl+"/followers/"+username)
  }
}
