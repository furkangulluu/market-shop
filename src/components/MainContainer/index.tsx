import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import RightSide from "../RightSide";
import LeftSide from "../LeftSide";
import ProductList from "../ProductList";
import { Row, Col, Layout } from "antd";

const MainContainer = () => {
  return (
    <div>
      <Header title="Market" />
      <Container>
        <Row>
          <Col span={6}>
            <LeftSide />
          </Col>
          <Col span={12}>
            <ProductList />
          </Col>
          <Col span={6}>
            <RightSide />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default MainContainer;

const Container = styled.div`
  width: 80%;
  margin: 40px 10%
`;
