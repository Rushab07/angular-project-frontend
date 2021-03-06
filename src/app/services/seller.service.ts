import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SellerTable } from '../models/seller-table.model';
const baseUrl = 'http://localhost:8081/api/sellers';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<SellerTable[]> {
    return this.http.get<SellerTable[]>(baseUrl);
  }
  get(id: any): Observable<SellerTable> {
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
  findByTitle(title: any): Observable<SellerTable[]> {
    return this.http.get<SellerTable[]>(`${baseUrl}?title=${title}`);
  }
}