import styled from "styled-components";

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  background: #ffffff;

  @media only screen and (max-width: 576px) {
    margin: 20px 0;
  }
`;

const Container = styled.div`
  width: 124px;
  height: 235px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  button {
    background: ${(theme) => theme.theme.colors.primary};
    color: #ffffff;
    border-radius: 5px;
  }
`;

const Image = styled.div`
  width: 124px;
  height: 124px;
  background: #fefefe;
  border: 2px solid #f3f0fe;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  .image-box {
    width: 92px;
    height: 92px;
    background: #c4c4c4;
  }
`;

const Price = styled.div`
  height: 23px;
  font-size: 14px;
  line-height: 20px;
  color: #1ea4ce;
  height: 20px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  height: 45px;
`;



export { ProductListContainer, Container, Image, Price, Title };
