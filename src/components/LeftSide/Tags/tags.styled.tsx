import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  margin-bottom: 25px;
  color: ${(theme) => theme.theme.colors.textColor};
`;

const Title = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: ${(theme) => theme.theme.colors.textColor};
`;

const Container = styled.div`
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
`;

const CheckboxList = styled.div`
  height: 150px;
  overflow-y: scroll;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  .ant-checkbox-wrapper {
    margin-left: 0;
    .ant-checkbox {
      margin: 10px 0;
      padding: 0;

      .ant-checkbox-inner {
        height: 20px;
        width: 20px;
      }
    }

    .ant-checkbox-checked {
      .ant-checkbox-inner {
        background-color: ${(theme) => theme.theme.colors.primary};
      }
    }
  }
`;

export { Card, Title, Container, CheckboxList };
