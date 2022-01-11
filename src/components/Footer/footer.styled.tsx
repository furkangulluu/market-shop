import styled from "styled-components";

const CustomFooter = styled.footer`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(theme) => theme.theme.colors.primary};
`;


export { CustomFooter };