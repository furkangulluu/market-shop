import React from "react";
import { useAppSelector } from "../../hooks/slice-hook";
import { Container, Title, Tags, TypeItem } from "./typeList.styled";

const TagList = () => {
  const types = useAppSelector((state) => state.filters.types);
  let tagList = types.map(item => {
    return {...item, isSelected: item.name === 'All' }
  });
  function clickTag(name: string) {
    tagList.map((x) => x.isSelected === false);
    let index = tagList.findIndex((x) => x.name === name);
    tagList[index].isSelected = true;
  }

  return (
    <Container>
      <Title>Products</Title>
      <Tags>
        {tagList.map((item) => {
          return (
            <TypeItem
              className={item.isSelected ? "active" : ""}
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
