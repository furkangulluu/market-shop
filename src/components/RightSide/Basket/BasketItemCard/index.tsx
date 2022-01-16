import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { BasketItem } from "../../../../models/BasketItem";
import { useDispatch } from "react-redux";
import { basketSlice } from "../../../../redux/slices/basket";
import {
  ItemCard,
  Title,
  Price,
  CountContaier,
  CountBox,
} from "../basket.styled";

const BasketItemCard = (props: { item: BasketItem }) => {
  const dispatch = useDispatch();

  const decreaseItemCount = (product: BasketItem) => {
      dispatch(basketSlice.actions.decreaseBasketItem(product));
  };

  const increaseItemCount = (product: BasketItem) => {
      dispatch(basketSlice.actions.increaseBasketItem(product));
  };

  return (
    <div>
      <ItemCard>
        <div>
          <Title>{props.item.product.name}</Title>
          <Price>₺ {props.item.product.price}</Price>
        </div>
        <div>
          <CountContaier>
            <Button
              type="link"
              icon={<MinusOutlined />}
              onClick={() => {
                decreaseItemCount(props.item);
              }}
            ></Button>
            <CountBox className="count-box">{props.item.count}</CountBox>
            <Button
              type="link"
              icon={<PlusOutlined />}
              onClick={() => {
                increaseItemCount(props.item);
              }}
            ></Button>
          </CountContaier>
        </div>
      </ItemCard>
    </div>
  );
};

export default BasketItemCard;
