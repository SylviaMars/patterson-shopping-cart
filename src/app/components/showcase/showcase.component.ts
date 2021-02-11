import { Component, OnInit } from '@angular/core';
import { ItemDto } from 'src/app/models/ItemDto.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  items: ItemDto[] = [];
  loading = false;
  showBtn = false;
  constructor(
    private itemService: ItemsService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    // tslint:disable-next-line: deprecation
    this.itemService.getItems(4).subscribe({
      next: (response) => {
        if (response.status === 200 && response.body !== null) {
          this.items = response.body;
          this.loading = false;
        }
      },
      error: (error) => {throw error;}
    });
  }

  /**
   * @param title of the item
   * @returns a section of the item's title if is larger than 20 chars.
   */
  getTitle(title: string): string {
    return title.length > 20 ? title.slice(0, 20).concat('...')  : title;
  }

  /**
   * @param item selected.
   * Sets value from item service selected Items array.
   */
  addItemsToCart(item: ItemDto): void {
    this.itemService.setSelectedItems(item);
  }

}
