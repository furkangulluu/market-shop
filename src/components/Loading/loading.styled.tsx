import styled from "styled-components";

const Loader = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 40%;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 3;

  .loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #292b2c;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    display: inline-block;
    position: relative;
    left: 50%;
    margin: 30px 0 30px -20px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Loader };
