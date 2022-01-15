import React from 'react'
import { Input, Checkbox } from 'antd';
import { Card, Title, Container, CheckboxList } from "./brands.styled";
import { useAppSelector } from '../../../hooks/slice-hook';

const Brands = () => {
  const brands = useAppSelector((state) => state.filters.brands)

    return (
      <div>
        <Title>Brands</Title>
        <Card>
          <Container>
            <Input size="large" placeholder="Search brand" />
            <CheckboxList>
              {
                brands.map(item => {
                  return (
                    <Checkbox onChange={() => {}} key={item.name}>{item.name}({item.count})</Checkbox>
                  )
                }) 
              }
            </CheckboxList>
          </Container>
        </Card>
      </div>
    );
};

export default Brands;
