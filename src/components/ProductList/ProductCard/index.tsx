import { Button } from "antd";
import { Container, Image, Title, Price } from "../productList.styled";
import { Product } from "../../../models/Product";
import { useDispatch } from "react-redux";
import { basketSlice } from "../../../redux/slices/basket";

const ProductCard = (props: { product: Product }) => {
  const dispatch = useDispatch();
  const addToCart = (product: Product) => {
    dispatch(basketSlice.actions.setBasket(product))
  }

  return (
    <div>
      <Container>
        <Image>
          <div className="image-box"></div>
        </Image>
        <Price>₺ {props.product?.price}</Price>
        <Title>{props.product?.name}</Title>
        <Button onClick={() => { addToCart(props.product) }}>Add</Button>
      </Container>
    </div>
  );
};

export default ProductCard;
