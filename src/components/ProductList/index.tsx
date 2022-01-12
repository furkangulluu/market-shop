import React from "react";
import { Button } from "antd";
import {
  Container,
  ImageContainer,
  ProductTitle,
  Price,
} from "./productList.styled";

const ProductList = () => {
  return (
    <div className="">
      <Container>
        <ImageContainer>
          <div className="image-box"></div>
        </ImageContainer>
        <Price>₺ 14,99</Price>
        <ProductTitle>Gorgeous Office Mug</ProductTitle>
        <div className="add-button-container">
          <Button onClick={() => {}}>Add</Button>
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
