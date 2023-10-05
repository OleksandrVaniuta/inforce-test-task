import { createPortal } from 'react-dom';
import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  Backdrop,
  ModalWindow,
  CloseModalBtn,
  ModalHeader,
  ModalContent,
  ModalTitle,
} from './Modal.styled';

import { FiX } from 'react-icons/fi';

const modalContainer = document.getElementById('modal-root');

export default function PopupWindow({
  closeModal,
  title,
  children,
  isModalOpen,
}) {
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <CSSTransition
      in={isModalOpen}
      nodeRef={nodeRef}
      timeout={10000}
      classNames="modal"
      unmountOnExit
    >
      <Backdrop onClick={handleClick} ref={nodeRef}>
        <ModalWindow>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          <CloseModalBtn onClick={closeModal}>
            <FiX size={24} style={{ color: '#000' }} />
          </CloseModalBtn>
          <ModalContent>{children}</ModalContent>
        </ModalWindow>
      </Backdrop>
    </CSSTransition>,
    modalContainer
  );
}
