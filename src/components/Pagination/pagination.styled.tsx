import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .ant-pagination-prev {
    margin-right: 40px;
    a {
      color: ${(theme) => theme.theme.colors.textColor};

      :hover {
        color: ${(theme) => theme.theme.colors.primary};
      }
    }
  }

  .ant-pagination-next {
    margin-left: 40px;
    a {
      color: ${(theme) => theme.theme.colors.textColor};
      :hover {
        color: ${(theme) => theme.theme.colors.primary};
      }
    }
  }

  .ant-pagination-item {
    border: 0;
    background: none;

    a {
      color: ${(theme) => theme.theme.colors.textColor};
      :hover {
        color: #ffffff;
        background: ${(theme) => theme.theme.colors.primary};
        border-radius: 3px;
      }
    }
  }

  .ant-pagination-item-active {
    a {
      color: ${(theme) => theme.theme.colors.primary};
    }
  }
`;

export { Container };
