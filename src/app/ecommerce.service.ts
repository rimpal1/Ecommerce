import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts } from './products';
import { Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  private _url = 'http://localhost:8080/products/';
  public productData: IProducts[] = [];


  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this._url);


  }


}
