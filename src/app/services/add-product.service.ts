import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductTable } from '../models/product-table.model';
const baseUrl = 'http://localhost:8081/api/products';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<ProductTable[]> {
    return this.http.get<ProductTable[]>(baseUrl);
  }

  get(id: any): Observable<ProductTable> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<ProductTable[]> {
    return this.http.get<ProductTable[]>(`${baseUrl}?title=${title}`);
  }
}
