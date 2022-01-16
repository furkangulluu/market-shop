import styled from "styled-components";

/*Basket*/
const BasketCard = styled.div`
  width: 100%;
  padding: 20px;
  background: #ffffff;
  border: 8px solid #1ea4ce;
  box-sizing: border-box;
  top: 116px;
`;

const BasketItem = styled.div`

`;

const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;

  .price {
    margin-top: 1rem;
    padding: 1rem;
    line-height: 16px;
    color: #1ea4ce;
    background: #ffffff;
    border: 2px solid #1ea4ce;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BasketEmpty = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/*Basket Item*/
const ItemCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(theme) => theme.theme.colors.border};
  padding: 15px 0;
`;

const Title = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #191919;
`;

const Price = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #1ea4ce;
`;

const CountContaier = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    color: ${(theme) => theme.theme.colors.primary};
  }
`;

const CountBox = styled.div`
    width: 32px;
    height: 32px;
    color: #ffffff;
    background: #1ea4ce;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export {
  BasketCard,
  BasketItem,
  TotalPrice,
  BasketEmpty,
  ItemCard,
  Title,
  Price,
  CountContaier,
  CountBox,
};
