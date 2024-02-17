import { useForm } from 'react-hook-form';
import { Modal } from 'react-responsive-modal';
import { ActionButton } from '../Buttons/ActionButton';
import { TextInput } from '../Inputs/TextInput';
import { SelectInput } from '../Inputs/SelectInput';

// Aqui van los mocks de las opciones de tipo Select - Mas adelante se reemplazan por valores de BD.
// import { //, categoria } from '../../data/select/selectOptions';

// } from '../../data/select/selectOptions';

import 'react-responsive-modal/styles.css';
import './popupstyles.css';
import { categoriaOptions, marcaOptions } from '../../data/select/selectOptions';

interface Props {
    openValue: boolean;
    closeFunction: () => void;
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

const closeIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12 text-red-500">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

export const NewArticleModal = ({ openValue, closeFunction }: Props) => {
    const { register, handleSubmit } = useForm<FormFilterValues>();

    const onSubmit = handleSubmit(data => {
        console.log(data);
    });

    return (
        <Modal
            open={openValue}
            onClose={closeFunction}
            closeIcon={closeIcon}
            classNames={{
                overlay: 'customOverlay',
                overlayAnimationIn: 'customEnterOverlayAnimation',
                overlayAnimationOut: 'customLeaveOverlayAnimation',
                modalAnimationIn: 'customEnterModalAnimation',
                modalAnimationOut: 'customLeaveModalAnimation',
                modal: 'customModal',
            }}
            animationDuration={500}>
            {/* 
                Inputs activos: 
                    * Descripcion  
                    * Codigo Barras  
                    * Costo  
                    * MargenGanancia  
                    * Marca  (Select)
                    * Categoria (Select)  
                    * Porcentaje IVA
        
                Inputs inactivos: 
                    * Precio Final  
                    * Neto Gravado  
             */}

            <form onSubmit={onSubmit} className="">
                <div className="grid grid-cols-3 gap-4 p-4">
                    <TextInput
                        inputName={'codigoBarra'}
                        inputType={'text'}
                        inputTitle={'Codigo de barras'}
                        placeholder={'100000101010102'}
                        keyPressEvent={() => {}}
                        registerForm={{ ...register('codigoBarra', { required: false }) }}
                        customContainerClassName="mr-5 w-full"
                    />
                    <SelectInput
                        inputName={'marca'}
                        inputTitle={'Marca'}
                        placeholder
                        options={marcaOptions}
                        registerForm={{ ...register('marca', { required: false }) }}
                        customContainerClassName="mr-5 w-full"
                    />
                    <SelectInput
                        inputName={'categoria'}
                        inputTitle={'Categoria'}
                        placeholder
                        options={categoriaOptions}
                        registerForm={{ ...register('categoria', { required: false }) }}
                        customContainerClassName="mr-5 w-full"
                    />
                    <TextInput
                        inputName={'costo'}
                        inputType={'text'}
                        inputTitle={'Costo'}
                        placeholder={'1000$'}
                        keyPressEvent={() => {}}
                        disabled
                        registerForm={{ ...register('costo', { required: false }) }}
                        customContainerClassName="mr-5 w-full"
                    />
                    <TextInput
                        inputName={'margenGanancia'}
                        inputType={'text'}
                        inputTitle={'Margen de ganancia'}
                        placeholder={'+ 500'}
                        keyPressEvent={() => {}}
                        disabled
                        registerForm={{ ...register('margenGanancia', { required: false }) }}
                        customContainerClassName="mr-5 w-full"
                    />
                    <TextInput
                        inputName={'porcentajeIVA'}
                        inputType={'text'}
                        inputTitle={'Porcentaje de IVA'}
                        placeholder={'X%'}
                        keyPressEvent={() => {}}
                        registerForm={{ ...register('porcentajeIVA', { required: false }) }}
                        customContainerClassName="mr-5 w-full"
                    />
                    <TextInput
                        inputName={'netoGrabado'}
                        inputType={'text'}
                        inputTitle={'Neto grabado'}
                        placeholder={'...'}
                        keyPressEvent={() => {}}
                        disabled
                        registerForm={{ ...register('netoGrabado', { required: false }) }}
                        customContainerClassName="mr-5 w-full"
                    />
                    <TextInput
                        inputName={'precioFinal'}
                        inputType={'text'}
                        inputTitle={'Precio final'}
                        placeholder={'3500$'}
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
                        action={() => {}}
                        customClass="bg-teal-400 text-black hover:bg-teal-400 mt-5 "
                    />
                </div>
            </form>
        </Modal>
    );
};
