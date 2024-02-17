import { ActionButton } from '../../../../../components/Buttons/ActionButton';
import { TextInput } from '../../../../../components/Inputs/TextInput';
import { CreditCard } from './CreditCard';

export const Pago = () => {
    return (
        <section className="bg-gray-800 rounded-md p-5">
            <div className="flex w-full mt-5">
                <div className="w-1/2 ">
                    <div className="bg-gray-500 mr-2 p-3 rounded-md">
                        <div className="flex justify-between">
                            <h1 className="text-lg mb-3">Tipo de Cliente:</h1>
                        </div>
                        <div className="p-3 bg-gray-800 rounded-md flex justify-center">
                            <div className="text-lg">
                                <TextInput
                                    inputName={'anonimo'}
                                    inputType={'checkbox'}
                                    inputTitle={'Anonimo'}
                                    keyPressEvent={() => {}}
                                    registerForm={() => {}}
                                    // registerForm={{ ...register('color', { required: false }) }}
                                    customContainerClassName="ml-5 mr-5"
                                    customInputClassName="h-4"
                                />
                            </div>
                            <div className="text-lg">
                                <TextInput
                                    inputName={'asociado'}
                                    inputType={'checkbox'}
                                    inputTitle={'Asociado'}
                                    keyPressEvent={() => {}}
                                    registerForm={() => {}}
                                    // registerForm={{ ...register('color', { required: false }) }}
                                    customContainerClassName="ml-5 mr-5"
                                    customInputClassName="h-4"
                                />
                            </div>
                        </div>
                        <div className="border-gray-200 border-b-2 mt-3"></div>
                        <h1 className="mt-5 mb-3">Ingrese documentacion del Cliente:</h1>
                        <div className="flex w-2/3">
                            <TextInput
                                inputName={'name'}
                                inputType={'text'}
                                placeholder={'DNI/CUIT...'}
                                keyPressEvent={() => {}}
                                registerForm={() => {}}
                                customContainerClassName="w-full"
                                customInputClassName={'mt-0 h-10'}
                            />

                            <ActionButton
                                title="Buscar"
                                action={() => {}}
                                customClass="bg-gray-900 ml-3 hover:bg-indigo-400 hover:text-gray-900 mt-2"
                            />
                        </div>

                        <div className="border-gray-200 border-b-2 mt-8"></div>

                        <div className="mt-3">
                            <TextInput
                                inputName={'name'}
                                inputType={'text'}
                                placeholder={'Nombre...'}
                                keyPressEvent={() => {}}
                                registerForm={() => {}}
                                customContainerClassName="w-full"
                                customInputClassName={'mt-0 h-10'}
                            />
                            <TextInput
                                inputName={'direccion'}
                                inputType={'text'}
                                placeholder={'Direccion...'}
                                keyPressEvent={() => {}}
                                registerForm={() => {}}
                                customContainerClassName="w-full"
                                customInputClassName={'mt-0 h-10'}
                            />
                            <TextInput
                                inputName={'cuit'}
                                inputType={'text'}
                                placeholder={'DNI/CUIT...'}
                                keyPressEvent={() => {}}
                                registerForm={() => {}}
                                customContainerClassName="w-full"
                                customInputClassName={'mt-0 h-10'}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <div className="bg-gray-500 mr-2 p-3 rounded-md">
                        <div className="flex justify-between">
                            <h1 className="text-lg mb-3">Tipo de Pago:</h1>
                        </div>
                        <div className="p-3 bg-gray-800 rounded-md flex justify-center">
                            <div className="text-lg">
                                <TextInput
                                    inputName={'efectivo'}
                                    inputType={'checkbox'}
                                    inputTitle={'Efectivo'}
                                    keyPressEvent={() => {}}
                                    registerForm={() => {}}
                                    // registerForm={{ ...register('color', { required: false }) }}
                                    customContainerClassName="ml-5 mr-5"
                                    customInputClassName="h-4"
                                />
                            </div>
                            <div className="text-lg">
                                <TextInput
                                    inputName={'tarjeta'}
                                    inputType={'checkbox'}
                                    inputTitle={'Tarjeta'}
                                    keyPressEvent={() => {}}
                                    registerForm={() => {}}
                                    // registerForm={{ ...register('color', { required: false }) }}
                                    customContainerClassName="ml-5 mr-5"
                                    customInputClassName="h-4"
                                />
                            </div>
                        </div>
                        <div className="border-gray-200 border-b-2 mt-3"></div>
                        <div className="mt-2">
                            <CreditCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
