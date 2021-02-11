import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemDto } from 'src/app/models/ItemDto.model';
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
  dataSource: MatTableDataSource <ItemDto> ;
  constructor(public itemsService: ItemsService) {
    this.data = this.itemsService.getSelectedItems();
    this.dataSource = new MatTableDataSource(this.data);
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

  removeItem(item: ItemDto): void {
    this.itemsService.removeItems(item);
    this.data = this.itemsService.getSelectedItems();
    this.dataSource.data = this.itemsService.getSelectedItems();
  }
}
