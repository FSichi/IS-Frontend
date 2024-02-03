import { Link } from 'react-router-dom';

interface Props {
    data: {
        id: number;
        cliente: string;
        vendedor: string;
        fecha: string;
        tipoPago: string;
        monto: string;
        estado: string;
    }[];
}

export const TableForVentasList = ({ data }: Props) => {
    const headers = ['Cliente', 'Vendedor', 'Fecha', 'Tipo de Pago', 'Monto', 'Estado', 'Accion'];

    return (
        <table className="table border text-center rounded-lg overflow-hidden w-full">
            <thead className="border-b bg-gray-800">
                <tr>
                    {headers.map(item => (
                        <th
                            scope="col"
                            className="text-sm font-medium text-gray-100 px-0 py-4 text-center"
                            key={item}>
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr className="bg-white border-b" key={item.id}>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.cliente}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.vendedor}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.fecha}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.tipoPago}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            $ {item.monto}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            <p
                                className={`rounded-md py-1 ${item.estado === 'Finalizado' ? 'bg-teal-300 ' : 'bg-indigo-300'}`}>
                                {item.estado}
                            </p>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap">
                            <Link
                                to={`/app/ventas/${item.id}`}
                                className="bg-slate-900 py-2 px-4 text-white rounded-md hover:bg-sky-500">
                                Visualizar
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
