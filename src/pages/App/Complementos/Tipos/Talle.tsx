import { useForm } from 'react-hook-form';
import { TableForTalleList } from '../../../../components/Table/TableForComplementosList'; // Asegúrate de tener este componente
import { tableTalleData } from '../../../../data/mocks/tableComplementosData'; // Asegúrate de tener estos datos
import { useState } from 'react';
import { TextInput } from '../../../../components/Inputs/TextInput';
import { ActionButton } from '../../../../components/Buttons/ActionButton';

type FormFilterValues = {
    tipoTalle: string;
    talle: string;
};

export const Talle = () => {
    const {
        register,
        handleSubmit,
        setValue: setInputFormValue,
    } = useForm<FormFilterValues>({
        defaultValues: { tipoTalle: '', talle: '' },
    });

    const [talleSelected, setTalleSelected] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const obtenerTalle = (tipoTalle: string, talle: string) => {
        const talleSelectedPrev = talleSelected;
        setTalleSelected(`${tipoTalle} - ${talle}`);

        setInputFormValue('tipoTalle', tipoTalle);
        setInputFormValue('talle', talle);

        talleSelectedPrev === '' && setIsEdit(true);
    };

    const cleanForm = () => {
        setTalleSelected('');
        setInputFormValue('tipoTalle', '');
        setInputFormValue('talle', '');
        setIsEdit(false);
    };

    const onSubmit = handleSubmit(data => {
        /* LÓGICA BACKEND */

        console.log(data);
    });

    return (
        <section className="p-5">
            <div className="md:flex bg-gray-800 rounded-lg shadow-lg shadow-gray-400 p-5">
                <div className="md:w-1/2 p-5">
                    <div className="border-2 border-white rounded-lg">
                        <TableForTalleList data={tableTalleData} getTalle={obtenerTalle} />
                    </div>
                </div>
                <div className="md:w-1/2 p-5">
                    <form onSubmit={onSubmit} className="bg-white rounded-lg">
                        <h1 className="text-gray-900 text-xl font-medium text-center p-4">
                            {!isEdit ? 'Agregar Nuevo Talle' : 'Editar Talle'}
                        </h1>
                        <div className="border-b border-gray-400"></div>
                        <TextInput
                            inputName={'Tipo Talle'}
                            inputType={'text'}
                            inputTitle={'Tipo Talle'}
                            placeholder={'...'}
                            keyPressEvent={() => {}}
                            registerForm={{ ...register('talle', { required: false }) }}
                            customContainerClassName="ml-5 mr-5 pt-5 text-center text-black"
                        />
                        <TextInput
                            inputName={'Talle'}
                            inputType={'text'}
                            inputTitle={'Talle'}
                            placeholder={'...'}
                            keyPressEvent={() => {}}
                            registerForm={{ ...register('tipoTalle', { required: false }) }}
                            customContainerClassName="ml-5 mr-5 pt-5 text-center text-black"
                        />
                        <div className="border-b border-gray-400 mt-10"></div>
                        <div
                            className={`flex ${isEdit ? 'justify-between p-4' : 'justify-end p-4'}`}>
                            {isEdit && (
                                <ActionButton
                                    type="button"
                                    title="Limpiar"
                                    action={cleanForm}
                                    customClass="border border-transparent bg-teal-400 text-gray-950 hover:bg-cyan-400 text-sm font-medium  w-28"
                                />
                            )}

                            <ActionButton
                                type="submit"
                                title={isEdit ? 'Modificar' : 'Agregar'}
                                customClass="border border-transparent bg-teal-400 text-gray-950 hover:bg-cyan-400 text-sm font-medium  w-28"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
