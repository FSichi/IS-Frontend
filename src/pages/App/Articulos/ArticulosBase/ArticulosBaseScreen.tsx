import React, { useState, useEffect } from 'react';
import { TextInput } from '../../../../components/Inputs/TextInput';
import { PageHeader } from '../../../../components/PageHeader/PageHeader';
import { OptionsHeader } from './OptionsHeader';
import { ActionButton } from '../../../../components/Buttons/ActionButton';
import { PaginationSection } from '../../../../components/Pagination/PaginationSection';
import { TableForArticulosBaseList } from '../../../../components/Table/TableForArticulosBaseList';
import { tableArticulosBaseData } from '../../../../data/mocks/tableArticulosBaseData';
import { StateModal } from './Modals/StateModal';
import { ModalContext } from '../../../../context/modal.context';
import { NewArticleModal } from './Modals/NewArticleModal';

export const ArticulosBaseScreen = () => {
    const [current, setCurrent] = useState(1);

    const onChangeCurrent = (value: number) => {
        setCurrent(value);
    };

    const { state } = React.useContext(ModalContext);

    const [openModalProduct, setOpenModalProduct] = useState(false);
    const [typeModalProduct, setTypeModalProduct] = useState<'new' | 'edit'>('new');

    const [openModalState, setOpenModalState] = useState(false);
    const [typeModalState, setTypeModalState] = useState<'active' | 'inactive'>('active');

    const openModalStateType = (type: 'active' | 'inactive') => {
        setOpenModalState(true);
        setTypeModalState(type);
    };

    const openModalProductType = (type: 'new' | 'edit') => {
        setOpenModalProduct(true);
        setTypeModalProduct(type);
    };

    useEffect(() => {
        if (!state) {
            setOpenModalState(false);
            setOpenModalProduct(false);
        }
    }, [state]);

    return (
        <section>
            <div>
                <PageHeader title="Articulos">
                    <OptionsHeader newArticleModal={() => openModalProductType('new')} />
                </PageHeader>
            </div>

            <NewArticleModal value={openModalProduct} type={typeModalProduct} />
            <StateModal value={openModalState} type={typeModalState} />

            <div className="flex justify-center bg-gray-800 mx-auto w-3/6 mt-5 py-5 rounded-lg">
                <TextInput
                    inputName={''}
                    inputType={'text'}
                    placeholder={'Codigo de articulo'}
                    keyPressEvent={() => {}}
                    // registerForm={{ ...('#', { required: false }) }}
                    registerForm={() => {}}
                    customContainerClassName="text-center text-black mr-6 mb-2"
                />
                <ActionButton
                    type="button"
                    title={'Search'}
                    customClass="bg-teal-400 text-gray-950 hover:bg-cyan-400 text-sm font-medium mt-2 mb-2"
                />
            </div>
            <div>
                <div className="mt-6 overflow-x-auto">
                    <TableForArticulosBaseList
                        data={tableArticulosBaseData}
                        openStateModal={openModalStateType}
                        openProductModal={openModalProductType}
                    />
                </div>

                <PaginationSection
                    current={current}
                    changeCurrent={onChangeCurrent}
                    pageSize={10}
                    totalElements={100}
                />
            </div>
        </section>
    );
};
