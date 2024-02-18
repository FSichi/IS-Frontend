import React, { useEffect } from 'react';
import { GenericModal } from '../../../../../components/Modals/GenericModal';
import { ModalContext } from '../../../../../context/modal.context';

interface Props {
    value: boolean;
    type: 'active' | 'inactive';
}

export const StateModal = ({ value, type }: Props) => {
    const { closeModal, openModal, state } = React.useContext(ModalContext);

    useEffect(() => {
        value && openModal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <>
            {value && (
                <GenericModal closeFunction={closeModal} openValue={state}>
                    {type === 'active' ? <div>Quieres Activar</div> : <div>Quieres Desactivar</div>}
                </GenericModal>
            )}
        </>
    );
};
