import caitIcon1 from "./caitlinicon.JPG";
import "./Modal.css";
import ReactDOM from "react-dom";

const Modal = ({ open, children, onClose, setIsOpen }) => {
  const handleClick = (e) => {
    setIsOpen(false);
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={handleClick} />
      <div className="modalPopUp">{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
