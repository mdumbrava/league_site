import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import caitIcon from "./images/caitlin/caitlinicon.JPG";
import caitIcon1 from "./images/caitlin/caitlinicon.JPG";

function App() {
  const BUTTON_WRAP = {
    position: "relative",
    zIndex: 1,
  };

  const OTHER_CONTENT = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "red",
    padding: "10px",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <h1 className="title">League modal</h1>
      <div style={BUTTON_WRAP}>
        <img src={caitIcon} onClick={() => setIsOpen(true)} alt="icon" />

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          setIsOpen={setIsOpen}
        >
          <img src={caitIcon1} alt="icon" />
        </Modal>
      </div>
      <div style={OTHER_CONTENT}>other content</div>
    </div>
  );
}

export default App;
