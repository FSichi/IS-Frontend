import { ActionButton } from '../../../../components/Buttons/ActionButton';

interface OptionsProps {
    clienteModal: () => void;
}
export const OptionsHeader = ({ clienteModal }: OptionsProps) => {
    return (
        <ActionButton
            title="Nuevo Articulo"
            customClass="bg-gray-800 text-white"
            action={clienteModal}
        />
    );
};
