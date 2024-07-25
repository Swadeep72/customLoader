import { Loader } from "./components/Loader/Loader";
const App = () => {
  let red, yellow, green, tempVal, pause = false, stop = false;
  const handleLights = () => {
    stop = true
    red = 4
    yellow = 8
    green = 2
    --green
    handleLight()
  }
  const handleLight = () => {
    let [mainVar, mainStr] = [red > 0 ? red : (yellow > 0 ? yellow : green), red > 0 ? "red" : (yellow > 0 ? "yellow" : "green")]
    document.getElementById(mainStr).style.opacity == 1 ? document.getElementById(mainStr).style.opacity = 0.3 : document.getElementById(mainStr).style.opacity = 1
    setTimeout(() => {
      if (stop) {
        (mainStr == "red") ? red-- : ((mainStr == "yellow") ? yellow-- : green--)
        mainVar > 0 ? handleLight() : handleLights()
      } else {
        if (pause) {
          tempVal = { red, yellow, green }
          console.log(tempVal, "tempVal")
        } else {
          ["red", "yellow", "green"].forEach(color => document.getElementById(color).style.opacity = 1);
        }
      }
    }, 500)
  }
  return (
    <>
      <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "10px 0", width: "500px", display: "flex", flexDirection: "column", rowGap: "5px", justifyContent: "space-between", alignItems: "center" }}>
          <button style={{ border: "5px solid black", opacity: "1", border: "0", height: "75px", width: "75px", borderRadius: "50%", transition: "all 0.3s ease-in", background: "red" }} id="red">1</button>
          <button style={{ border: "5px solid black", opacity: "1", border: "0", height: "75px", width: "75px", borderRadius: "50%", transition: "all 0.3s ease-in", background: "yellow" }} id="yellow">2</button>
          <button style={{ border: "5px solid black", opacity: "1", border: "0", height: "75px", width: "75px", borderRadius: "50%", transition: "all 0.3s ease-in", background: "green" }} id="green">3</button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={handleLights} type="button">Start</button>
          <button onClick={() => stop = false}>Stop</button>
          {/* <button onClick={() => {
          stop = false
          pause=true
        }}>Pause</button>
        <button onClick={()=>{
          stop = true
          pause = false
          red=tempVal?.red
          yellow=tempVal?.yellow
          green=tempVal?.green
          handleLight()
        }}>Play</button> */}
        </div>
      </div>
      <Loader height="50px" width="50px" bgColor="black" loaderColor="red" transitionColour={{ loader: "white", background: "orange" }}><div /></Loader>
      <Loader height="100px" width="100px" bgColor="orange" loaderColor="white" transitionColour={{ loader: "red", background: "black" }}><div /></Loader>
      <Loader height="150px" width="150px" bgColor="pink" loaderColor="cyan" transitionColour={{ loader: "mediumseagreen", background: "white" }}><div /></Loader>
    </>
  )
};
export default App;