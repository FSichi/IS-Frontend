import { TextInput } from '../../../../components/Inputs/TextInput';
import { PageHeader } from '../../../../components/PageHeader/PageHeader';
import { OptionsHeader } from './OptionsHeader';
import { ActionButton } from '../../../../components/Buttons/ActionButton';
import { PaginationSection } from '../../../../components/Pagination/PaginationSection';
import { useState } from 'react';
import { TableForArticulosBaseList } from '../../../../components/Table/TableFroArticulosBaseList';
import { tableArticulosBaseData } from '../../../../data/mocks/tableArticulosBaseData';

export const ArticulosBaseScreen = () => {
    const [current, setCurrent] = useState(1);

    const onChangeCurrent = (value: number) => {
        setCurrent(value);
    };

    return (
        <section>
            <div>
                <PageHeader title="Articulos">
                    <OptionsHeader /* clienteModal={onOpenModal} */ />
                </PageHeader>
            </div>

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
            <div>
                <div className="mt-6 overflow-x-auto">
                    <TableForArticulosBaseList data={tableArticulosBaseData} />
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
