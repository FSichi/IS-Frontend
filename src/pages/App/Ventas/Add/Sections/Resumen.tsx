import ReactSelect from 'react-select';
import { ActionButton } from '../../../../../components/Buttons/ActionButton';
import { useState } from 'react';

export const Resumen = () => {
    const [optionValue, setOptionValue] = useState({
        label: 'Todas',
        value: '1',
    });

    return (
        <div>
            <div className="flex place-content-center items-center h-96 bg-slate-500">
                <div>Aqui va el Template de la Factura / Recibo </div>
                <ActionButton
                    title="Realizar Venta"
                    action={() => {}}
                    customClass="bg-gray-900 text-white ml-3 hover:bg-cyan-400 hover:text-gray-900 mt-2"
                />
            </div>
            <div className="text-black">
                <ReactSelect
                    onChange={newValue => {
                        if (newValue) {
                            setOptionValue(newValue);
                        } else {
                            setOptionValue({ label: '', value: '' });
                        }
                    }}
                    value={optionValue}
                    options={[
                        { value: '1', label: 'Opción 1' },
                        { value: '2', label: 'Opción 2' },
                        { value: '3', label: 'Opción 3' },
                    ]}
                />
            </div>
        </div>
    );
};
