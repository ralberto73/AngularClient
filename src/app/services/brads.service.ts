import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private baseUrl = 'https://localhost:44370/Brands';

  constructor(private http: HttpClient) { }
/*
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
*/
createBrand(brand: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, brand);
  }
/*
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
*/
  getList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
