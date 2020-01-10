import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EntityService {
  constructor(public http: HttpClient) {}

  getEntities() {
    return this.http.get(`https://entity.getsandbox.com/entities`);
  }
}