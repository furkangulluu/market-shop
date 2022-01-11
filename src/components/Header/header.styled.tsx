import styled from "styled-components";

const CustomHeader = styled.div`
  width: 100%;
  height: 76px;
  top: 0px;
  z-index: 2;
  background: ${(theme) => theme.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
`;

const Price = styled.div`
  width: 129px;
  height: 76px;
  position: absolute;
  right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: ${(theme) => theme.theme.colors.secondary};
`;

export { CustomHeader, Price, Logo };