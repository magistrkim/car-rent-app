import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import { xCross } from '../../assets';
import { ModalOverlay, ModalFrame, Button, Image } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, isOpen, onClose }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );
  useEffect(() => {
    const originalOverflowY = document.documentElement.style.overflowY;
    document.addEventListener('keydown', closeModal);
    document.documentElement.style.overflowY = isOpen
      ? 'hidden'
      : originalOverflowY;
    return () => {
      document.removeEventListener('keydown', closeModal);
      document.documentElement.style.overflowY = originalOverflowY;
    };
  }, [closeModal, isOpen]);
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <ModalOverlay onClick={closeModal}>
      <ModalFrame>
        <Button onClick={onClose}>
          <Image src={xCross} alt="close-cross" />
        </Button>
        {children}
      </ModalFrame>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
