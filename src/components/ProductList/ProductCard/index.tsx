import React from "react";
import { Button } from "antd";
import { Container, Image, Title, Price } from "../productList.styled";
import { Product } from "../../../models/Product";

const ProductCard = (props: { product?: Product }) => {
  return (
    <div>
      <Container>
        <Image>
          <div className="image-box"></div>
        </Image>
        <Price>₺ {props.product?.price}</Price>
        <Title>{props.product?.name}</Title>
        <Button onClick={() => {}}>Add</Button>
      </Container>
    </div>
  );
};

export default ProductCard;
