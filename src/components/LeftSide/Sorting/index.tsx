import sortingData from "../../../resources/sortingData";
import { Radio } from "antd";
import { Card, Title, Container } from "./sorting.styled";
import { useDispatch } from "react-redux";
import { SortingType } from "../../../models/SortingType";
import { GET_PRODUCT_BY_SORTING_SAGA } from "../../../redux/actions/sagaActions";

const Sorting = () => {
  const dispatch = useDispatch();

  const change = (item: SortingType) => {
    dispatch({ type: GET_PRODUCT_BY_SORTING_SAGA, payload: item });
  };

  return (
    <div>
      <Title>Sorting</Title>
      <Card>
        <Container>
          <Radio.Group defaultValue={"1"}>
            {sortingData().map((item) => {
              return (
                <Radio
                  onChange={() => {
                    change(item);
                  }}
                  value={item.id}
                  key={item.id}
                >
                  {item.title}
                </Radio>
              );
            })}
          </Radio.Group>
        </Container>
      </Card>
    </div>
  );
};

export default Sorting;
