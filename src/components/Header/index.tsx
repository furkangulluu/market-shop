import React from "react";
import styled from "styled-components";
import { HeaderProps } from "./header"
import { logo, basket } from "../../assets/icons";
import { CustomHeader, Price, Logo } from "./header.styled";

const Header = (props : HeaderProps) => {
  return (
    <CustomHeader>
      <Logo>
        <img src={logo} width={141} height={40} alt="Logo" />
      </Logo>
      <Price>
        <img src={basket} width={24} height={24} alt="Basket" />
        <span className="price">₺ 39,50</span>
      </Price>
    </CustomHeader>
  );
};

export default Header;