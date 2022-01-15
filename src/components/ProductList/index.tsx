import ProductCard from "./ProductCard"
import { ProductListContainer } from "./productList.styled";
import { useAppSelector } from "../../hooks/slice-hook";

const ProductList = () => {
  const payload = useAppSelector((state) => state.products);

  return (
    <ProductListContainer>
      {payload.products.map((item) => {
        return <ProductCard product={item} key={ item.name }/>;
      })}
    </ProductListContainer>
  );
};

export default ProductList;

