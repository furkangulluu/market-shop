import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import {
  ItemCard,
  Title,
  Price,
  CountContaier,
  CountBox,
} from "../basket.styled";

const BasketItem = (props: {decrease: Function, increse: Function}) => {
  return (
    <div>
      <ItemCard>
        <div>
          <Title>Example Product</Title>
          <Price>₺ 19,50</Price>
        </div>
        <div>
          <CountContaier>
            <Button type="link" icon={<MinusOutlined />}></Button>
            <CountBox className="count-box">0</CountBox>
            <Button type="link" icon={<PlusOutlined />}></Button>
          </CountContaier>
        </div>
      </ItemCard>
    </div>
  );
};

export default BasketItem;
