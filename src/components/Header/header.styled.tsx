import styled from "styled-components";

const CustomHeader = styled.div`
  width: 100%;
  height: 76px;
  top: 0px;
  background: ${(theme) => theme.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Logo = styled.div`
`;

const Price = styled.div`
  width: 129px;
  height: 76px;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: ${(theme) => theme.theme.colors.secondary};

  @media only screen and (max-width: 1062px) {
    display: none;
  }
`;

export { CustomHeader, Price, Logo, Container };