import BasketItemCard from "./BasketItemCard";
import {
  BasketCard,
  BasketItem,
  TotalPrice,
  BasketEmpty,
} from "./basket.styled";
import { useAppSelector } from "../../../hooks/slice-hook";

const Basket = () => {
  const payload = useAppSelector((state) => state.basket);

  return (
    <BasketCard>
      {payload.products.length === 0
        ? <BasketEmpty>Your basket is empty</BasketEmpty>
        : <BasketItem>{
            payload.products.map(item => {
              return <BasketItemCard item={item} key={item.product.name} />;
              })
            }
            <TotalPrice>
              <div className="price">₺ {payload.totalPrice.toFixed(2)}</div>
            </TotalPrice>
          </BasketItem>
      }
    </BasketCard>
  );
};

export default Basket;

