import { useAppSelector } from "../../../hooks/slice-hook";
import { useDispatch } from "react-redux";
import { GET_PRODUCT_BY_BRAND_SAGA } from "../../../redux/actions/sagaActions";
import { SEARCH_BRAND_SAGA } from "../../../redux/actions/sagaActions";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import FilterCard from "../../Cards/FilterCard";

const Brands = () => {
  const dispatch = useDispatch();
  let brands = useAppSelector((state) => state.filters.brands);
  let brandsAll = brands.find((item) => item.name === "All");
  let options = brands
    .filter((item) => item.name !== "All")
    .map((x) => {
      return { label: `${x.name} (${x.count})`, value: x.name };
    });
  const selectedBrands = useAppSelector((state) => state.apiQuery.manufacturer);

  const input = (val: string) => {
    if (val.length > 2) {
      dispatch({ type: SEARCH_BRAND_SAGA, payload: val });
    }
  };

  const change = (payload: CheckboxValueType[]) => {
    if (payload.includes("All") && payload.length > 1) {
      payload = payload.filter((item) => item !== "All");
    }
    dispatch({ type: GET_PRODUCT_BY_BRAND_SAGA, payload: payload });
  };

  return (
    <div>
      <FilterCard
        title={'Brands'}
        options={options}
        selectedItem={selectedBrands}
        itemAll={brandsAll}
        change={change}
        input={input}
      />
    </div>
  );
};

export default Brands;
