import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Entity } from "../models/entity";

@Injectable({
  providedIn: "root"
})
export class EntityService {
  private baseURL: string;

  constructor(public http: HttpClient) {
    this.baseURL = "https://entity.getsandbox.com";
  }

  getEntities() {
    return this.http.get(`${this.baseURL}/entities`);
  }

  getEntity(id: number) {
    return this.http.get(`${this.baseURL}/entities/${id}`);
  }

  createEntity(entity: Entity) {
    return this.http.post(`${this.baseURL}/entities`, entity);
  }

  updateEntity(id: number, update: Entity) {
    return this.http.put(`${this.baseURL}/entities/${id}`, update);
  }

  deleteEntity(id: number) {
    return this.http.delete(`${this.baseURL}/entities/${id}`);
  }
}
