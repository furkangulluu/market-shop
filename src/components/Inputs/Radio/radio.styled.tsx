import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .label {
    margin-left: 12px;
  }
  cursor: pointer;
`;

const RadioButton = styled.div`
  width: 22px;
  height: 22px;
  background: #ffffff;
  border: 2px solid #dfdee2;
  box-sizing: border-box;
  border-radius: 17.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, RadioButton }