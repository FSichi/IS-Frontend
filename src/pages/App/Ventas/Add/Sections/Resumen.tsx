import ReactSelect from 'react-select';
import { ActionButton } from '../../../../../components/Buttons/ActionButton';

export const Resumen = () => {
    return (
        <div className="flex place-content-center items-center h-96 bg-slate-500">
            <div>Aqui va el Template de la Factura / Recibo </div>
            <ActionButton
                title="Realizar Venta"
                action={() => {}}
                customClass="bg-gray-900 text-white ml-3 hover:bg-cyan-400 hover:text-gray-900 mt-2"
            />
            {/* <ReactSelect onChange={() => {}} /> */}
        </div>
    );
};
