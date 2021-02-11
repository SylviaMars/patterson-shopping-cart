export class ItemDto  {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
    constructor() {
        this.category = '',
        this.description = '',
        this.id = 0,
        this.image = '',
        this.price = 0,
        this.title = '';
    }
}

export enum Discount {

    DTO10 = 'DTO10', 
    DTO50 = 'DTO50'
}

export interface DiscountApplied{
   discount: number;
   applied: boolean;
}
