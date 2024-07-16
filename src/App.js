import { Loader } from "./components/Loader/Loader"

const App = () => (
  <>
    <Loader height="50px" width="50px" bgColor="black" loaderColor="red" transitionColour={{ loader: "white", background: "orange" }}><div /></Loader>
    <Loader height="100px" width="100px" bgColor="orange" loaderColor="white" transitionColour={{ loader: "red", background: "black" }}><div /></Loader>
    <Loader height="150px" width="150px" bgColor="pink" loaderColor="cyan" transitionColour={{ loader: "mediumseagreen", background: "white" }}><div /></Loader>
  </>
);
export default App;