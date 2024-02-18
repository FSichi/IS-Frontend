/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { categoriaOptions, marcaOptions } from '../../../../../data/select/selectOptions';
import { ActionButton } from '../../../../../components/Buttons/ActionButton';
import { TextInput } from '../../../../../components/Inputs/TextInput';
import { ReactSelect } from '../../../../../components/Inputs/ReactSelect';
import { GenericModal } from '../../../../../components/Modals/GenericModal';
import { ModalContext } from '../../../../../context/modal.context';

interface Props {
    value: boolean;
    type: 'new' | 'edit';
}

type FormFilterValues = {
    descripcion: string;
    codigoBarra: number;
    costo: number;
    margenGanancia: number;
    marca: string;
    categoria: string;
    porcentajeIVA: number;
    precioFinal: number;
    netoGrabado: number;
};

type NameSelectInputs = 'marca' | 'categoria';

type SelectedOptionType = {
    value: string | number;
    label: string;
};

export const NewArticleModal = ({ value, type }: Props) => {
    const { closeModal, openModal, state } = useContext(ModalContext);

    const { register, handleSubmit, setValue } = useForm<FormFilterValues>();

    const [selectValues, setSelectValues] = useState({
        marca: { label: '', value: '' },
        categoria: { label: '', value: '' },
    });

    const handleChangeSelect = (name: NameSelectInputs, selectedOption: SelectedOptionType) => {
        setSelectValues(prevValues => ({ ...prevValues, [name]: selectedOption }));
        setValue(name, selectedOption.value as string); // Actualizar valor en react-hook-form
    };

    useEffect(() => {
        value && openModal();
    }, [value]);

    const onSubmit = handleSubmit(data => {
        console.log(data);
    });

    return (
        <>
            {value && (
                <GenericModal closeFunction={closeModal} openValue={state}>
                    <h1>ABRISTE: {type as string}</h1>
                    <form onSubmit={onSubmit} className="">
                        <div className="grid grid-cols-3 gap-4 p-4">
                            <TextInput
                                inputName={'codigoBarra'}
                                inputType={'text'}
                                inputTitle={'Codigo de barras'}
                                placeholder={'...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('codigoBarra', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />
                            <ReactSelect
                                inputTitle="Marca"
                                value={selectValues.marca}
                                onChange={selectedOption =>
                                    handleChangeSelect(
                                        'marca',
                                        selectedOption || { value: '', label: '' },
                                    )
                                }
                                options={marcaOptions}
                                isSearchable
                            />
                            <ReactSelect
                                inputTitle="Categoria"
                                value={selectValues.categoria}
                                onChange={selectedOption =>
                                    handleChangeSelect(
                                        'categoria',
                                        selectedOption || { value: '', label: '' },
                                    )
                                }
                                options={categoriaOptions}
                                isSearchable
                            />
                            <TextInput
                                inputName={'costo'}
                                inputType={'number'}
                                inputTitle={'Costo'}
                                placeholder={'$ X'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('costo', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />
                            <TextInput
                                inputName={'margenGanancia'}
                                inputType={'number'}
                                inputTitle={'Margen de ganancia'}
                                placeholder={'X%'}
                                keyPressEvent={() => {}}
                                registerForm={{
                                    ...register('margenGanancia', { required: false }),
                                }}
                                customContainerClassName="mr-5 w-full"
                            />
                            <TextInput
                                inputName={'porcentajeIVA'}
                                inputType={'number'}
                                inputTitle={'Porcentaje de IVA'}
                                placeholder={'X%'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('porcentajeIVA', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />
                            <TextInput
                                inputName={'netoGrabado'}
                                inputType={'number'}
                                inputTitle={'Neto grabado'}
                                placeholder={'...'}
                                keyPressEvent={() => {}}
                                disabled
                                registerForm={{ ...register('netoGrabado', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />
                            <TextInput
                                inputName={'precioFinal'}
                                inputType={'number'}
                                inputTitle={'Precio final'}
                                placeholder={'...'}
                                keyPressEvent={() => {}}
                                disabled
                                registerForm={{ ...register('precioFinal', { required: false }) }}
                                customContainerClassName="mr-5 w-full"
                            />

                            <TextInput
                                inputName={'descripcion'}
                                inputType={'text'}
                                inputTitle={'Descripcion'}
                                placeholder={'Descripcion...'}
                                keyPressEvent={() => {}}
                                registerForm={{ ...register('descripcion', { required: false }) }}
                                customContainerClassName="mr-5 w-full col-span-3"
                            />
                        </div>
                        <div className="flex justify-end">
                            <ActionButton
                                title="Registrar Cliente"
                                type="submit"
                                action={() => {}}
                                customClass="bg-teal-400 text-black hover:bg-teal-400 mt-5 "
                            />
                        </div>
                    </form>
                </GenericModal>
            )}
        </>
    );
};
