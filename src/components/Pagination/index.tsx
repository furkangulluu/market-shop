import React from "react";
import { Pagination } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Container } from "./pagination.styled";

const Paginations = () => {
  const change = (page: number, pageSize: number) => {
    console.log(page);
  };

  const itemRender = (current: any, type: string, originalElement: any) => {
    if (type === "prev") {
      return <a>{<LeftOutlined />} Prev</a>;
    }
    if (type === "next") {
      return <a>Next {<RightOutlined />}</a>;
    }
    return originalElement;
  }

  return (
    <Container>
      <Pagination
        total={160}
        itemRender={itemRender}
        onChange={change}
        showSizeChanger={false}
      />
    </Container>
  );
};

export default Paginations;
