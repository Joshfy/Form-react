import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    backgroundColor: '#ff0000', // Cambia esto al color de fondo que desees
    color: '#ffffff', // Cambia esto al color del texto que desees
    padding: '20px',
    borderRadius: '5px',
  },
};

Modal.setAppElement('#root'); // Necesario para que react-modal funcione

const Alert = ({ message, isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <p>{message}</p>
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
};

export default Alert;
