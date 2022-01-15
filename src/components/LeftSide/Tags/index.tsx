import React from "react";
import { Input, Checkbox } from "antd";
import { Card, Title, Container, CheckboxList } from "./tags.styled";
import { useAppSelector } from "../../../hooks/slice-hook";

const Tags = () => {
  const tags = useAppSelector((state) => state.filters.tags);

  return (
    <div>
      <Title>Tags</Title>
      <Card>
        <Container>
          <Input size="large" placeholder="Search brand" />
          <CheckboxList>
            {tags.map((item) => {
              return (
                <Checkbox onChange={() => {}} key={item.name}>
                  {item.name}({item.count})
                </Checkbox>
              );
            })}
          </CheckboxList>
        </Container>
      </Card>
    </div>
  );
};

export default Tags;
