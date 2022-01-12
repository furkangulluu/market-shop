import React from "react";
import { Input, Checkbox } from "antd";
import { Card, Title, Container, CheckboxList } from "./tags.styled";

const Tags = () => {
  return (
    <div>
      <Title>Tags</Title>
      <Card>
        <Container>
          <Input size="large" placeholder="Search brand" />
          <CheckboxList>
            <Checkbox onChange={() => {}}>Checkbox</Checkbox>
            <Checkbox onChange={() => {}}>Checkbox</Checkbox>
            <Checkbox onChange={() => {}}>Checkbox</Checkbox>
            <Checkbox onChange={() => {}}>Checkbox</Checkbox>
            <Checkbox onChange={() => {}}>Checkbox</Checkbox>
            <Checkbox onChange={() => {}}>Checkbox</Checkbox>
            <Checkbox onChange={() => {}}>Checkbox</Checkbox>
            <Checkbox onChange={() => {}}>Checkbox</Checkbox>
          </CheckboxList>
        </Container>
      </Card>
    </div>
  );
};

export default Tags;
