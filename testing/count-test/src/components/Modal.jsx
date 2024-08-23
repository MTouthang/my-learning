import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
function Modal({ isOpen, onClose }) {
  if (!isOpen) return null; // Don't render anything if modal is not open

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>This is a simple modal dialog.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root") // Ensure this ID exists in your index.html
  );
}

export default Modal;
