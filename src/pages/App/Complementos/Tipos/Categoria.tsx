import { useForm } from 'react-hook-form';
import { TableForCategoriaList } from '../../../../components/Table/TableForComplementosList';
import { tableCategoriasData } from '../../../../data/mocks/tableComplementosData';
import { useState } from 'react';
import { TextInput } from '../../../../components/Inputs/TextInput';
import { ActionButton } from '../../../../components/Buttons/ActionButton';

type FormFilterValues = {
    categoria: string;
};

export const Categoria = () => {
    const {
        register,
        handleSubmit,
        setValue: setInputFormValue,
    } = useForm<FormFilterValues>({
        defaultValues: { categoria: '' },
    });

    const [categoriaSelected, setCategoriaSelected] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const obtenerCategoria = (categoria: string) => {
        const categoriaSelectedPrev = categoriaSelected;
        setCategoriaSelected(categoria);

        setInputFormValue('categoria', categoria);

        categoriaSelectedPrev === '' && setIsEdit(true);
    };

    const cleanForm = () => {
        setCategoriaSelected('');
        setInputFormValue('categoria', '');
        setIsEdit(false);
    };

    const onSubmit = handleSubmit(data => {
        /* LOGICA BACK */

        console.log(data);
    });

    return (
        <section className="p-5">
            <div className="md:flex bg-gray-800 rounded-lg shadow-lg shadow-gray-400 p-5">
                <div className="md:w-1/2 p-5">
                    <div className="border-2 border-white rounded-lg">
                        <TableForCategoriaList
                            data={tableCategoriasData}
                            getCategoria={obtenerCategoria}
                        />
                    </div>
                </div>
                <div className="md:w-1/2 p-5">
                    <form onSubmit={onSubmit} className="bg-white rounded-lg">
                        <h1 className="text-gray-900 text-xl font-medium text-center p-4">
                            {!isEdit ? 'Agregar Nueva Categoria' : 'Editar Categoria'}
                        </h1>
                        <div className="border-b border-gray-400"></div>
                        <TextInput
                            // value={colorSelected}
                            inputName={'Categoria'}
                            inputType={'text'}
                            inputTitle={'Categoria'}
                            placeholder={'...'}
                            keyPressEvent={() => {}}
                            registerForm={{ ...register('categoria', { required: false }) }}
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
