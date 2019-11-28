import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  apiUrl: string = "http://localhost:5000/posts";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl);
  }

  persist(data) {
    return this.http.post(this.apiUrl, data)
  }

  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
