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

  .ant-radio-group {
    display: flex;
    flex-direction: column;

    .ant-radio-wrapper {
      margin: 6px 0;

      .ant-radio-inner {
        height: 22px;
        width: 22px;
      }

      .ant-radio-checked {
        .ant-radio-inner {
          border-color: ${(theme) => theme.theme.colors.primary};
        }
        .ant-radio-inner::after {
          background-color: ${(theme) => theme.theme.colors.primary};
        }
      }
    }
  }
`;

export { Card, Title, Container };
