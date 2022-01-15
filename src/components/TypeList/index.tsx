import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/slice-hook";
import { GET_PRODUCT_BY_TYPE_SAGA } from "../../redux/actions/sagaActions";
import { Container, Title, Tags, TypeItem } from "./typeList.styled";

const TagList = () => {
  const dispatch = useDispatch();
  const types = useAppSelector((state) => state.filters.types);
  const selectedItemType = useAppSelector((state) => state.apiQuery.itemType);
  
  function clickTag(item: string) {
    dispatch({ type: GET_PRODUCT_BY_TYPE_SAGA, payload: item });
  }

  return (
    <Container>
      <Title>Products</Title>
      <Tags>
        {types.map((item) => {
          return (
            <TypeItem
              className={item.name === selectedItemType ? "active" : ""}
              onClick={() => {
                clickTag(item.name);
              }}
              key={item.name}
            >
              {item.name}
            </TypeItem>
          );
        })}
      </Tags>
    </Container>
  );
};

export default TagList;
