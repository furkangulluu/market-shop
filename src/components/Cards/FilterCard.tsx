import { Input, Checkbox } from "antd";
import { Card, Title, Container, CheckboxList } from "./filterCard.styled";

const FilterCard = (props: {
  title: string;
  options: any;
  selectedItem: any;
  itemAll: any;
  change: Function;
  input: Function;
}) => {
  return (
    <div>
      <Title>{props.title}</Title>
      <Card>
        <Container>
          <Input
            size="large"
            placeholder="Search tag"
            onChange={(e) => props.input(e.target.value)}
          />
          <CheckboxList>
            {props.itemAll && (
              <Checkbox
                checked={props.selectedItem.includes("All")}
                onChange={() => {
                  props.change(["All"]);
                }}
              >
                {`${props.itemAll.name} (${props.itemAll.count})`}
              </Checkbox>
            )}
            <Checkbox.Group
              options={props.options}
              value={props.selectedItem}
              onChange={(val) => {
                props.change(val);
              }}
            />
          </CheckboxList>
        </Container>
      </Card>
    </div>
  );
};

export default FilterCard;
