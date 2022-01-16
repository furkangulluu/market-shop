import Sorting from "./Sorting";
import Brands from "./Brands";
import Tags from "./Tags";
import MobileFilterItem from "./MobileFilterItem";

import styled from "styled-components";

const components = [
  {
    name: "Sorting",
    component: <Sorting />,
  },
  {
    name: "Brands",
    component: <Brands />,
  },
  {
    name: "Tags",
    component: <Tags />,
  },
];
const LeftSide = () => {
  return (
    <div>
      <MobileFilter>
        {components.map((item) => {
          return <MobileFilterItem item={item} key={item.name}></MobileFilterItem>;
        })}
      </MobileFilter>
      <DesktopFilter>
        <Sorting />
        <Brands />
        <Tags />
      </DesktopFilter>
    </div>
  );
};

export default LeftSide;

const MobileFilter = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;

  .ant-btn {
    margin: 0 10px;
  }

  @media only screen and (min-width: 1062px) {
    display: none;
  }
`;

const DesktopFilter = styled.div`
  @media only screen and (max-width: 1062px) {
    display: none;
  }
`;
