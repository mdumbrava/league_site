import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import caitIcon from "./images/caitlin/caitlinicon.JPG";
import Tabs from "./components/Modal/Tabs";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bigDiv">
      <h1 className="title">League Modal</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="buttonWrap">
        <img src={caitIcon} onClick={() => setIsOpen(true)} alt="icon" />

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          setIsOpen={setIsOpen}
        >
          <Tabs />
        </Modal>
      </div>
    </div>
  );
}

export default App;
