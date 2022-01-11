import { useDispatch } from "react-redux";
import BasketItem from "./BasketItem";
import { BasketCard, TotalPrice, EmptyBasket } from "./basket.styled";

const Basket = () => {

  const increase = () => {
    console.log("increase")
  };

  const decrease = () => {
    console.log("decrease");
  };
    
  return (
    <BasketCard>
      {false && <EmptyBasket>Your basket is empty</EmptyBasket>}
      <BasketItem increse={() => increase()} decrease={() => decrease()} />
      <BasketItem increse={() => increase()} decrease={() => decrease()} />
      <BasketItem increse={() => increase()} decrease={() => decrease()} />
      <TotalPrice>
        <div className="price">₺ 39,50</div>
      </TotalPrice>
    </BasketCard>
  );
};

export default Basket;

