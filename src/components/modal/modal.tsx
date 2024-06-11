import React from 'react';
import styles from './modal.module.scss';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ModalProps = {
    children: React.ReactNode,
    isOpen: boolean,
    closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, closeModal }) => {
    if (!isOpen) return;

    return (
        <div className={styles['modal-container']}>
            {children}
            <button className={styles['modal-close-btn']} onClick={closeModal}>
                <FontAwesomeIcon icon={faCircleXmark} size="2x" />
            </button>
        </div>
    )
}

export default Modal




