import { ReactNode } from 'react';
import { Modal } from 'react-responsive-modal';
import { CloseIcon } from './CloseIcon';
import 'react-responsive-modal/styles.css';
import './popupstyles.css';

interface Props {
    openValue: boolean;
    closeFunction: () => void;
    children: ReactNode | ReactNode[];
}

export const GenericModal = ({ openValue, closeFunction, children }: Props) => {
    return (
        <Modal
            open={openValue}
            onClose={closeFunction}
            closeIcon={CloseIcon as unknown as ReactNode}
            classNames={{
                overlay: 'customOverlay',
                overlayAnimationIn: 'customEnterOverlayAnimation',
                overlayAnimationOut: 'customLeaveOverlayAnimation',
                modalAnimationIn: 'customEnterModalAnimation',
                modalAnimationOut: 'customLeaveModalAnimation',
                modal: 'customModal',
            }}
            animationDuration={500}>
            {children}
        </Modal>
    );
};
