import { ActionButton } from '../../../../components/Buttons/ActionButton';
import { SelectInput } from '../../../../components/Inputs/SelectInput';
import { TextInput } from '../../../../components/Inputs/TextInput';
import { PageHeader } from '../../../../components/PageHeader/PageHeader';
import {
    colorOptions,
    talleOptions,
    tipoTalleOptions,
} from '../../../../data/select/selectOptions';

export const ArticulosStockScreen = () => {
    return (
        <section>
            <PageHeader title="Articulos en Stock" />
            <div className="flex justify-center bg-gray-800 mx-auto w-3/6 mt-5 py-5 rounded-lg">
                <div>
                    <TextInput
                        // value={colorSelected}
                        inputName={''}
                        inputType={'text'}
                        placeholder={'Codigo de articulo'}
                        keyPressEvent={() => {}}
                        registerForm={{ ...('#', { required: false }) }}
                        customContainerClassName="text-center text-black pr-6 mb-2"
                    />
                </div>
                <div>
                    <ActionButton
                        type="button"
                        title={'Search'}
                        customClass="border border-transparent bg-teal-400 text-gray-950 hover:bg-cyan-400 text-sm font-medium h-full"
                    />
                </div>
            </div>
            <div className="grid  bg-gray-800 rounded-lg grid-rows-2 grid-flow-col gap-4 m-5 p-4">
                <div className="row-span-4 rounded-lg bg-slate-400 "></div>
                <div className="row-span-2 col-span-2 ">
                    <form className="">
                        <div className="grid grid-cols-2">
                            <SelectInput
                                inputName={'tipoTalle'}
                                inputTitle={'Tipo de Talle'}
                                placeholder
                                options={talleOptions}
                                registerForm={{ ...('tipoTalle', { required: false }) }}
                                customContainerClassName="w-full p-1"
                            />
                            <SelectInput
                                inputName={'talle'}
                                inputTitle={'N° Talle'}
                                placeholder
                                options={tipoTalleOptions}
                                registerForm={{ ...('talle', { required: false }) }}
                                customContainerClassName="w-full p-1"
                            />
                            <SelectInput
                                inputName={'color'}
                                inputTitle={'Color'}
                                placeholder
                                options={colorOptions}
                                registerForm={{ ...('categoria', { required: false }) }}
                                customContainerClassName="w-full p-1"
                            />
                        </div>

                        <div className="flex w-2">
                            <button className="py-2 px-4 text-white rounded-md hover:bg-black bg-cyan-500 flex-auto mr-2">
                                Modificar
                            </button>
                            <button className="py-2 px-4 text-white rounded-md bg-red-600 hover:bg-black flex-auto ml-2">
                                Eliminar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
