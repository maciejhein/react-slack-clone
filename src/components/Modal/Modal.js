import React from 'react'
import ReactDOM from 'react-dom'

const Modal = React.memo(({ children, closeModal }) => {
  const domElement = document.getElementById('modal-root');

  if (!domElement) return null
  
  return ReactDOM.createPortal(
    <div className="modal">
      <button onClick={closeModal}>Close</button>
      {children}
    </div>,
    domElement
  )
})

export default Modal;