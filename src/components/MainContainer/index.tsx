//Packages
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/slice-hook";

//Actions
import {
  GET_PRODUCTS_SAGA,
  GET_FILTERS_SAGA,
} from "../../redux/actions/sagaActions";

//Components
import Header from "../Header";
import Footer from "../Footer";
import RightSide from "../RightSide";
import LeftSide from "../LeftSide";
import TypeList from "../TypeList";
import ProductList from "../ProductList";
import Pagination from "../Pagination";
import Loading from "../Loading";
import { Row, Col } from "antd";

const MainContainer = () => {
  const dispatch = useDispatch();

  const loading = useAppSelector((state) => state.main.loading);
  
  const getProducts = () => {
    dispatch({ type: GET_PRODUCTS_SAGA });
  };

  const getFilters = () => {
    dispatch({ type: GET_FILTERS_SAGA });
  };

  useEffect(() => {
    getProducts();
    getFilters();
  }, []);
  
  return (
    <div>
      <Loading visible={loading} />
      <Header />
      <Container>
        <Row>
          <Col className="col-side">
            <LeftSide />
          </Col>
          <Col className="col-mid">
            <TypeList />
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
