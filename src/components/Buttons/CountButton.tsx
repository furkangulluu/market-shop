import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

const CountButton = (props : {label: "-" | "+"; onClick: Function }) => {
  return (
    <Button
        onClick={() => {
            props.onClick();
        }}
    >
      {props.label}
    </Button>
  );
};

export default CountButton;

const Button = styled.button`
  width: 10px;
  padding: 0.2rem;
  font-size: 1.5rem;
  color: #1ea4ce;
  background: #ffffff;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
`;