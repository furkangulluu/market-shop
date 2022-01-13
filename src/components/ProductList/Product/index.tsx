import React from "react";
import { Button } from "antd";
import { Container, Image, Title, Price } from "../productList.styled";

const Product = () => {
  return (
    <div>
      <Container>
        <Image>
          <div className="image-box"></div>
        </Image>
        <Price>₺ 14,99</Price>
        <Title>Gorgeous Office Mug</Title>
        <Button onClick={() => {}}>Add</Button>
      </Container>
    </div>
  );
};

export default Product;
