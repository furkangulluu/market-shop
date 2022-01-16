import { Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const MobileFilterItem = (props: { item: any }) => {
  return (
    <Dropdown
      overlay={props.item.component}
      trigger={["click"]}
      key={props.item.name}
      placement={"bottomCenter"}
    >
      <Button>
        {props.item.name} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default MobileFilterItem;
