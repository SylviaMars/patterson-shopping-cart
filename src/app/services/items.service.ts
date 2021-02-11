import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DiscountApplied, ItemDto } from '../models/ItemDto.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService{

  private host = 'https://fakestoreapi.com';

  public checkoutTotal = 0.00;
  public total = new BehaviorSubject<number>(this.checkoutTotal);
  public totalObservable = this.total.asObservable();

  public discount50Applied = false;
  public discount10Applied = false;

  private selectedItems: ItemDto[] = [];

  constructor(private https: HttpClient) { }

  /**
   * @param itemLimit: number of items we need.
   */
  getItems(itemLimit: number): Observable<HttpResponse<ItemDto[]>> {
    const url = this.host + '/products';
    let httpParams = new HttpParams();
    httpParams = httpParams.append('limit', itemLimit.toString());
    return this.https.get<ItemDto[]>(url, {params: httpParams, observe: 'response'});
  }

  /**
   * @param total: updates de value of the total amount price.
   */
  updateTotal(total: number): void {
    this.total.next(total);
  }

  /**
   * @returns selectedItems: array with selected items.
   */
  getSelectedItems(): ItemDto[] {
    return this.selectedItems;
  }

  /**
   * @param item: item selected
   * Sets the array with the selected Items.
   * Items are only added if array does not contain them.
   */
  setSelectedItems(item: ItemDto): void {
    if (!this.selectedItems.includes(item, 0)) {
      this.selectedItems.push(item);
      this.checkoutTotal = this.checkoutTotal + item.price;
    }
  }

  /**
   * @returns number of items selected.
   */
  getItemsLenght(): number {
    return this.selectedItems.length ;
  }

  /**
   * @param item to remove
   * Removes a selected item from items array.
   */
  removeItems(item: ItemDto): void{
    this.selectedItems.forEach(i => {
      if (item.id === i.id){
        this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
        this.checkoutTotal = this.checkoutTotal - item.price;
      }
    });
  }
  /**
   * @param discount value
   * @param price: total amount
   * @returns discounted price
   */
  applyDiscount(discountValue: number, price: number): DiscountApplied {
    this.checkoutTotal = (price * discountValue) / 100;
    return {discount: discountValue, applied: true}
  }

}
