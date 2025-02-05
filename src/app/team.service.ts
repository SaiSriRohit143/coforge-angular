import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private url='https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  helloService(){
    return "Hello from angular service";
  }
  getUsers(){
    return this.httpClient.get(this.url);
  }
}
