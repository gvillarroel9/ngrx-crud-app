import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruit } from '../models/fruit.model';
@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3002/fruit/';

  getFruits(){
    return this.http.get(this.baseUrl);
  }

  getFruitById(id: number){
    return this.http.get(this.baseUrl + id);
  }

  createFruit(fruit: Fruit){
    return this.http.post(this.baseUrl, fruit);
  }

  updateFruit(fruit: Fruit) {
    return this.http.put(this.baseUrl + fruit.id, fruit);
  }

  deleteFruit(id: number){
    return this.http.delete(this.baseUrl + id);
  }
}
