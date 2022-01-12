import React from 'react'
import sortingData from "../../../resources/sortingData";
// import Radio from "../../Inputs/Radio"
import { Radio } from "antd";
import { Card, Title, Container } from "./sorting.styled";

const Sorting = () => {
  return (
    <div>
      <Title>Sorting</Title>
      <Card>
        <Container>
          <Radio.Group onChange={() => {}} >
            {sortingData().map((item) => {
              return (
                <Radio onChange={() => {}} value={item.id} key={item.id}>
                  {item.title}
                </Radio>
              );
            })}
          </Radio.Group>
        </Container>
      </Card>
    </div>
  );
}

export default Sorting;
