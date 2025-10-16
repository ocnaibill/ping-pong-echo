import React, { useEffect, useState } from "react";
import styles from "./PopUpErro.module.css";

const PopupErro = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) setShow(true);
    else setTimeout(() => setShow(false), 300);
  }, [isOpen]);

  if (!isOpen && !show) return null;

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.fadeIn : styles.fadeOut}`}
    >
      <div className={styles.popup}>
        <h2>Poxa! Algo deu errado :(</h2>
        <p>
          Texto de exemplo para pop-ups de erro e verificação para o programa.
          Isto é somente um exemplo a ser seguido e suas variações podem ser
          feitas a partir deste.
        </p>
        <button onClick={onClose}>Entendi</button>
      </div>
    </div>
  );
};

export default PopupErro;
