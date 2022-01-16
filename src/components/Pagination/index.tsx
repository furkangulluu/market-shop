import { Pagination } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Container } from "./pagination.styled";
import { useAppSelector } from "../../hooks/slice-hook";
import { GET_PAGINATION_SAGA } from "../../redux/actions/sagaActions";
import { useDispatch } from "react-redux";
import { mainSlice } from "../../redux/slices/main";

const Paginations = () => {
  const dispatch = useDispatch()
  const allRecord = parseInt(useAppSelector(state => state.products.allRecord))
  const currentPage = parseInt(useAppSelector(state => state.apiQuery.page))
  const isMobile = useAppSelector((state) => state.main.isMobile);
  
  const change = (page: number ) => {
    dispatch({ type: GET_PAGINATION_SAGA, payload: page });
  };

  window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width: 500px)").matches) {
      dispatch(mainSlice.actions.setScreenType(true));
    } else {
      dispatch(
        mainSlice.actions.setScreenType(false)
      );
    }
  });

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
        simple={isMobile}
        pageSize={16}
        total={allRecord}
        current={currentPage}
        itemRender={itemRender}
        onChange={change}
        showSizeChanger={false}
      />
    </Container>
  );
};

export default Paginations;
