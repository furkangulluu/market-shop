import styled from 'styled-components'

const Container = styled.div`
  padding: 0 15px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 300; 
  margin-bottom: 5px;
  color: ${(theme) => theme.theme.colors.textColor};
`;

const Tags = styled.div`
  display: flex;

  .active {
    background: ${(theme) => theme.theme.colors.primary};
    color: #f2f0fd;
  }
`;

const TagItem = styled.div`
  height: 30px;
  background: #f2f0fd;
  color: ${(theme) => theme.theme.colors.primary};
  margin-right: 5px;
  padding: 4px 15px;

  :hover {
    background: ${(theme) => theme.theme.colors.primary};
    color: #f2f0fd;
    cursor: pointer;
  }
`;

export { Container, Title, Tags, TagItem };