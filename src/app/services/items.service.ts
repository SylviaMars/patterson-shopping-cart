import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemDto } from '../models/itemDto.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  host = 'https://fakestoreapi.com';
  constructor(private https: HttpClient) { }

  getItems(itemLimit: number): Observable<HttpResponse<ItemDto>> {
    const url = this.host + '/products';
    let httpParams = new HttpParams();
    httpParams = httpParams.append('limit', itemLimit.toString());
    return this.https.get<ItemDto>(url, {params: httpParams, observe: 'response'});
  }

}
