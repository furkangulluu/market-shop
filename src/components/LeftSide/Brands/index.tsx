import { Input, Checkbox } from "antd";
import { Card, Title, Container, CheckboxList } from "./brands.styled";
import { useAppSelector } from "../../../hooks/slice-hook";
import { useDispatch } from "react-redux";
import { GET_PRODUCT_BY_BRAND_SAGA } from "../../../redux/actions/sagaActions";
import { SEARCH_BRAND_SAGA } from "../../../redux/actions/sagaActions";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

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
    dispatch({ type: SEARCH_BRAND_SAGA, payload: val });
  };

  const change = (payload: CheckboxValueType[]) => {
    if (payload.includes("All") && payload.length > 1) {
      payload = payload.filter((item) => item !== "All");
    }
    dispatch({ type: GET_PRODUCT_BY_BRAND_SAGA, payload: payload });
  };

  return (
    <div>
      <Title>Brands</Title>
      <Card>
        <Container>
          <Input
            size="large"
            placeholder="Search brand"
            onChange={(e) => input(e.target.value)}
          />
          <CheckboxList>
            { brandsAll && 
            <Checkbox
              checked={selectedBrands?.includes("All")}
              onChange={() => {
                change(["All"]);
              }}
            >
              {`${brandsAll?.name} (${brandsAll?.count})`}
            </Checkbox>}
            <Checkbox.Group
              options={options}
              value={selectedBrands}
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

export default Brands;
