import { BasketItem } from './BasketItem';
export type Basket = {
    products: BasketItem[],
    totalPrice: number
}