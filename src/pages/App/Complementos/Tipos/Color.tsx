import { ActionButton } from '../../../../components/Buttons/ActionButton';
import { TextInput } from '../../../../components/Inputs/TextInput';
import { TableForColorList } from '../../../../components/Table/TalbeForComplementosList';
import { tableComplementosData } from '../../../../data/mocks/tableComplementosData';

export const Color = () => {
    return (
        <section className="p-5">
            <div className="md:flex bg-gray-800 rounded-lg shadow-lg shadow-gray-400 p-5">
                <div className="md:w-1/2 p-5">
                    <div className="bg-white rounded-lg">
                        <TableForColorList data={tableComplementosData} />
                    </div>
                </div>
                <div className="md:w-1/2 p-5">
                    <form action="" className=" bg-white rounded-lg p-5">
                        <div>
                            <h1 className="text-gray-900 text-xl font-medium text-center">
                                Gestion
                            </h1>
                        </div>
                        <div className="border-b border-gray-400 mt-3"></div>
                        <div className="mb-4">
                            <div className="p-6 flex justify-center">
                                <TextInput
                                    inputName={'name'}
                                    inputType={'text'}
                                    inputTitle={'Ingrese el color'}
                                    placeholder={'Color. Ej:"verde"'}
                                    keyPressEvent={() => {}}
                                    registerForm={{ ...('#', { required: false }) }}
                                    customContainerClassName="mr-5 w-2/3 text-gray-950 "
                                />
                            </div>
                        </div>
                        <div className="border-b border-gray-400"></div>
                        <div className="flex justify-end">
                            <div className="p-5">
                                <ActionButton
                                    type="submit"
                                    title="Aplicar/Modificar"
                                    action={() => {}}
                                    customClass="border border-transparent bg-teal-400 text-gray-950 hover:bg-cyan-400 text-sm font-medium  w-28"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
