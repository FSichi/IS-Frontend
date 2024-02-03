import { useState } from 'react';
import { PageHeader } from '../../../components/PageHeader/PageHeader';
import { PaginationSection } from '../../../components/Pagination/PaginationSection';
import { OptionsHeader } from './OptionsHeader';
import { TableForVentasList } from '../../../components/Table/TableForVentasList';
import { tableVentasData } from '../../../data/mocks/tableVentasData';

export const VentasList = () => {
    const [current, setCurrent] = useState(1);

    const onChangeCurrent = (value: number) => {
        setCurrent(value);
    };

    return (
        <section className="p-5">
            <PageHeader title="Listado de Ventas">
                <OptionsHeader />
            </PageHeader>

            <div className="mt-6 overflow-x-auto">
                <TableForVentasList data={tableVentasData} />
            </div>

            <PaginationSection
                current={current}
                changeCurrent={onChangeCurrent}
                pageSize={10}
                totalElements={100}
            />
        </section>
    );
};
