import React from 'react';
import { Modal } from 'react-responsive-modal';
import { LogIn } from '../../pages/LogIn';


export const ModalLogInOrSignUp = React.memo(({ showModal, onCloseModal }) => {
    return (
        <Modal
            open={showModal}
            onClose={onCloseModal}
            center
            animationDuration={300}
        >
            <LogIn
                style={true}
            />
        </Modal>
    )
})