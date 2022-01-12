import React from "react";
import { Container, Title, Tags, TagItem } from "./tagList.styled";

const TagList = () => {
  let tagList = [
    { id: 1, name: "mug", active: true },
    { id: 2, name: "shirt", active: false },
  ];

  function clickTag(id: number) {
      let index = tagList.findIndex((x) => x.id === id);
      tagList[index].active = true
  }

  return (
    <Container>
      <Title>Products</Title>
      <Tags>
        {tagList.map((item) => {
          return (
            <TagItem
              className={item.active ? "active" : ""}
              onClick={() => {
                clickTag(item.id);
              }}
              key={item.id}
            >
              {item.name}
            </TagItem>
          );
        })}
      </Tags>
    </Container>
  );
};

export default TagList;
