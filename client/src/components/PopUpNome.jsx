import React, { useState, useEffect } from "react";
import styles from "./PopUpNome.module.css";

const PopupNome = ({ isOpen, onClose, onConfirm }) => { 
  const [nick, setNick] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) setShow(true);
    else setTimeout(() => setShow(false), 300);
  }, [isOpen]);

  if (!isOpen && !show) return null;

  const handleConfirm = () => {
    onConfirm(nick); 
    onClose();
  };

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.fadeIn : styles.fadeOut}`}
    >
      <div className={styles.popup}>
        <h2>Nos informe seu nome:</h2>
        <label>Novo nick:</label>
        <input
          type="text"
          placeholder="eu sou tu, tu és eu..."
          value={nick}
          onChange={(e) => setNick(e.target.value)}
        />
        <button onClick={handleConfirm}>Confirmar</button>
      </div>
    </div>
  );
};

export default PopupNome;
