import { logo, basket } from "../../assets/icons";
import { CustomHeader, Price, Logo, Container } from "./header.styled";
import { useAppSelector } from "../../hooks/slice-hook";

const Header = () => {
  const totalPrice = useAppSelector((state) => state.basket.totalPrice);

  return (
    <CustomHeader>
      <Container>
        <Logo>
          <img src={logo} width={141} height={40} alt="Logo" />
        </Logo>
        <Price>
          <img src={basket} width={24} height={24} alt="Basket" />
          <span className="price">₺ {totalPrice.toFixed(2)}</span>
        </Price>
      </Container>
    </CustomHeader>
  );
};

export default Header;