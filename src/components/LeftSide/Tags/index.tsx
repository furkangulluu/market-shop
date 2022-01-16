import { useAppSelector } from "../../../hooks/slice-hook";
import { useDispatch } from "react-redux";
import {
  GET_PRODUCT_BY_TAG_SAGA,
  SEARCH_TAG_SAGA,
} from "../../../redux/actions/sagaActions";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import FilterCard from "../../Cards/FilterCard";

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
    if (val.length > 2) {
      dispatch({ type: SEARCH_TAG_SAGA, payload: val });
    }
  };

  return (
    <div>
      <FilterCard
        title={"Tags"}
        options={options}
        selectedItem={selectedTags}
        itemAll={tagsAll}
        change={change}
        input={input}
      />
    </div>
  );
};

export default Tags;
