import styled from "styled-components";


const Container = styled.div`
  width: 124px;
  height: 235px;
  margin: 30px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;

  .add-button-container {
    position: absolute;
    bottom 0;

    
  }
`;

const ImageContainer = styled.div`
  width: 124px;
  height: 124px;
  padding: 1rem;
  background: #fefefe;
  border: 2px solid #f3f0fe;
  border-radius: 12px;
  box-sizing: border-box;

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
`;

const ProductTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;



export { Container, ImageContainer, Price, ProductTitle };
