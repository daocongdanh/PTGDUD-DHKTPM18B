import "./App.css";
import Button from "./components/Button/Button";
import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <>
      <Button Icon={FaBeer} title={"Haha"} color={"blue"} bg={"yellow"} />
    </>
  );
}

export default App;
