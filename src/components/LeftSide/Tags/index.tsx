import { Input, Checkbox } from "antd";
import { Card, Title, Container, CheckboxList } from "./tags.styled";
import { useAppSelector } from "../../../hooks/slice-hook";
import { useDispatch } from "react-redux";
import {
  GET_PRODUCT_BY_TAG_SAGA,
  SEARCH_TAG_SAGA,
} from "../../../redux/actions/sagaActions";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

const Tags = () => {
  const tags = useAppSelector((state) => state.filters.tags);
  const selectedTags = useAppSelector((state) => state.apiQuery.tags);
  let tagsAll = tags.find((item) => item.name === "All");
  let options = tags
    .filter((item) => item.name !== "All")
    .map((x) => {
      return { label: `${x.name} (${x.count})`, value: x.name };
    });

  const dispatch = useDispatch();

  const change = (payload: CheckboxValueType[]) => {
    dispatch({ type: GET_PRODUCT_BY_TAG_SAGA, payload: payload });
  };

  const input = (val: string) => {
    dispatch({ type: SEARCH_TAG_SAGA, payload: val });
  };

  return (
    <div>
      <Title>Tags</Title>
      <Card>
        <Container>
          <Input
            size="large"
            placeholder="Search tag"
            onChange={(e) => input(e.target.value)}
          />
          <CheckboxList>
            {tagsAll && (
              <Checkbox
                checked={selectedTags?.includes("All")}
                onChange={() => {
                  change(["All"]);
                }}
              >
                {`${tagsAll?.name} (${tagsAll?.count})`}
              </Checkbox>
            )}
            <Checkbox.Group
              options={options}
              value={selectedTags}
              onChange={(val) => {
                change(val);
              }}
            />
          </CheckboxList>
        </Container>
      </Card>
    </div>
  );
};

export default Tags;
