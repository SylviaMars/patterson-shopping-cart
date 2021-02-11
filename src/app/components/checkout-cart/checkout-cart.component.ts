import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Discount, ItemDto } from 'src/app/models/ItemDto.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.scss']
})
export class CheckoutCartComponent implements OnInit {

  data: ItemDto[] = [];
  displayedColumns: string[] = ['img', 'title', 'price', 'icon'];
  auxMessage = 'No tienes artículos en el carrito.';
  discount = '';
  discountForm: FormGroup;
  dataSource: MatTableDataSource <ItemDto>;
  constructor(public itemsService: ItemsService) {
    this.data = this.itemsService.getSelectedItems();
    this.dataSource = new MatTableDataSource(this.data);
    this.discountForm = new FormGroup({
      discountValue: new FormControl('', Validators.required),
  });
  }

  ngOnInit(): void {
  }

  /**
   * @returns Message with num. of articles.
   */
  getTotalArticles(): string {
    let message = '';
    if (this.data.length === 1) {
      message = this.data.length + ' artículo';
    } else if (this.data.length > 1) {
      message = this.data.length + ' artículos';
    } else {
      message = this.auxMessage;
    }
    return message;
  }

  /**
   * @param title of the item
   * @returns a section of the item's title if is larger than 20 chars.
   */
  getTitle(title: string): string {
    return title.length > 30 ? title.slice(0, 30).concat('...')  : title;
  }

  /**
   * Removes the selected item from items array.
   */
  removeItem(item: ItemDto): void {
    this.itemsService.removeItems(item);
    this.data = this.itemsService.getSelectedItems();
    this.dataSource.data = this.itemsService.getSelectedItems();
  }

  /**
   * Checks discount and applies it.
   * If discount has been applied throws alert.
   */
  checkDiscount(): void{
    const value = this.discountForm.controls.discountValue.value;
    if (value === Discount.DTO10 && !this.itemsService.discount10Applied) {
      this.itemsService.applyDiscount(10, this.itemsService.checkoutTotal);
      this.itemsService.discount10Applied = true;
    } else if (value === Discount.DTO50 && !this.itemsService.discount50Applied) {
      this.itemsService.applyDiscount(50, this.itemsService.checkoutTotal);
      this.itemsService.discount50Applied = true;
    } else {
      alert('No pudo aplicar el descuento!');
    }
  }
}
