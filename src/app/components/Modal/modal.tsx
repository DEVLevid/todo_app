import React from "react";
import style from './styles.module.scss'; 
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; 
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        {children}
        <button className={style.closeBtn} onClick={onClose}>
         Cancelar
        </button>
      </div>
    </div>
  );
};

export default Modal;
