import React from 'react';
import './Modal.css';

const Modal = (props) => {
  return (
    <div className="Modal">
      <div className="Modal__content">
        {props.children}
      </div>
      <div className="Modal__overlay" onClick={props.onClose}></div>
    </div>
  );
};

export default Modal;
