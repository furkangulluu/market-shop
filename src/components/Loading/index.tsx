import { Loader } from "./loading.styled";

const Loading = (props: { visible: boolean }) => {
  return (
    <Loader style={{ display: props.visible ? "block" : "none" }}>
      <i className="loader"></i>
    </Loader>
  );
};

export default Loading;
