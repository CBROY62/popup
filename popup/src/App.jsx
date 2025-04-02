import React, { useState } from "react";
import "./App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <h1>MyApp</h1>
        <div className="buttons">
          <button className="login-btn" onClick={() => openModal("Login")}>Login</button>
          <button className="signup-btn" onClick={() => openModal("Sign Up")}>Sign Up</button>
        </div>
      </nav>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{modalType}</h2>
            <p>This is the {modalType} modal content.</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
