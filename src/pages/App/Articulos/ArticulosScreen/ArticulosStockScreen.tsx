import { useState } from 'react';
import { ActionButton } from '../../../../components/Buttons/ActionButton';
import { ReactSelect } from '../../../../components/Inputs/ReactSelect';
import { TextInput, TextInputDisabled } from '../../../../components/Inputs/TextInput';
import { PageHeader } from '../../../../components/PageHeader/PageHeader';

export const ArticulosStockScreen = () => {
    const [optionValueTipoTalle, setOptionValueTipoTalle] = useState({
        label: 'Universal',
        value: '1',
    });

    const [optionValueTalle, setOptionValueTalle] = useState({
        label: 'Universal',
        value: '1',
    });

    const [optionValueColor, setOptionValueColor] = useState({
        label: 'Universal',
        value: '1',
    });

    return (
        <section>
            <PageHeader title="Articulos en Stock" />

            <div className="flex justify-center bg-gray-800 mx-auto w-2/6 mt-5 py-5 rounded-lg">
                <div>
                    <TextInput
                        // value={colorSelected}
                        inputName={''}
                        inputType={'text'}
                        placeholder={'Codigo de articulo'}
                        keyPressEvent={() => {}}
                        // registerForm={{ ...('#', { required: false }) }}
                        registerForm={() => {}}
                        customContainerClassName="text-center text-black pr-6 mb-2"
                    />
                </div>
                <div>
                    <ActionButton
                        type="button"
                        title={'Search'}
                        customClass="border border-transparent bg-teal-400 text-gray-950 hover:bg-cyan-400 text-sm mt-2"
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <div className="flex bg-gray-800 rounded-lg m-5 p-4 w-4/6">
                    <div className="rounded-lg bg-slate-400 w-1/2 mr-5 p-5">
                        <TextInputDisabled
                            inputName={'name'}
                            customInputClassName={'mt-0 h-10 text-white '}
                            disabled
                            value={'001'}
                        />
                        <TextInputDisabled
                            inputName={'name'}
                            customContainerClassName="mt-5"
                            customInputClassName={'mt-0 h-10 text-white'}
                            disabled
                            value={'Remera Manga Larga'}
                        />
                        <TextInputDisabled
                            inputName={'name'}
                            customContainerClassName="mt-5"
                            customInputClassName={'mt-0 h-10 text-white'}
                            disabled
                            value={'lacoste'}
                        />
                        <TextInputDisabled
                            inputName={'name'}
                            customContainerClassName="mt-5"
                            customInputClassName={'mt-0 h-10 text-white'}
                            disabled
                            value={'descripcion'}
                        />
                    </div>
                    <form className="w-1/2 ml-5">
                        <div className="mb-10">
                            <ReactSelect
                                inputTitle="Tipo Talle"
                                onChange={newValue => {
                                    if (newValue) {
                                        setOptionValueTipoTalle({
                                            label: newValue.label,
                                            value: newValue.value.toString(),
                                        });
                                    } else {
                                        setOptionValueTipoTalle({ label: '', value: '' });
                                    }
                                }}
                                value={optionValueTipoTalle}
                                options={[
                                    { value: '1', label: 'Universal' },
                                    { value: '2', label: 'Americano' },
                                    { value: '3', label: 'Europeo' },
                                    { value: '4', label: 'Otro' },
                                ]}
                                isSearchable
                            />
                            <ReactSelect
                                inputTitle="Numero de Talle"
                                customInputContainer="mt-5"
                                onChange={newValue => {
                                    if (newValue) {
                                        setOptionValueTalle({
                                            label: newValue.label,
                                            value: newValue.value.toString(),
                                        });
                                    } else {
                                        setOptionValueTalle({ label: '', value: '' });
                                    }
                                }}
                                value={optionValueTalle}
                                options={[
                                    { value: '1', label: 'XL' },
                                    { value: '2', label: 'L' },
                                    { value: '3', label: 'M' },
                                    { value: '4', label: 'S' },
                                ]}
                                isSearchable
                            />
                            <ReactSelect
                                inputTitle="Color"
                                customInputContainer="mt-5"
                                onChange={newValue => {
                                    if (newValue) {
                                        setOptionValueColor({
                                            label: newValue.label,
                                            value: newValue.value.toString(),
                                        });
                                    } else {
                                        setOptionValueColor({ label: '', value: '' });
                                    }
                                }}
                                value={optionValueColor}
                                options={[
                                    { value: '1', label: 'Rojo' },
                                    { value: '2', label: 'Negro' },
                                    { value: '3', label: 'Azul' },
                                    { value: '4', label: 'Amarillo' },
                                    { value: '5', label: 'Naranja' },
                                    { value: '6', label: 'Morado' },
                                ]}
                                isSearchable
                            />
                        </div>

                        <div className="flex justify-center">
                            <ActionButton
                                title="Cancelar"
                                customClass="bg-red-500 hover:bg-black py-2 px-4 text-white rounded-md mr-4"
                                action={() => {}}
                                type="button"
                            />
                            <ActionButton
                                title="Modificar/Agregar"
                                customClass="bg-cyan-500 hover:bg-black py-2 px-4 text-white rounded-md ml-2"
                                action={() => {}}
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
