import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import RightSide from "../RightSide";
import LeftSide from "../LeftSide";
import TagList from "../TagList";
import ProductList from "../ProductList";
import Pagination from "../Pagination";
import { Row, Col } from "antd";

const MainContainer = () => {
  return (
    <div>
      <Header title="Market" />
      <Container>
        <Row>
          <Col className="col-side">
            <LeftSide />
          </Col>
          <Col className="col-mid">
            <TagList />
            <ProductList />
            <Pagination />
          </Col>
          <Col className="col-side">
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
  margin: 40px 20px;
  display: flex;
  justify-content: center;

  .col-side {
    width: 300px;
  }

  .col-mid {
    width: 700px;
  }

  @media only screen and (max-width: 1062px) {
    .col-side {
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .col-mid {
      width: 100%;
    }
  }
`;
