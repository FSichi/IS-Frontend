interface Props {
    data: {
        id: number;
        color: string;
        tipoTalle: string;
        talle: string;
        cantidad: number;
    }[];
}

export const TableForArticulosVenta = ({ data }: Props) => {
    const headers = ['Tipo Talle', 'Talle', 'Color', 'Cantidad', 'Accion'];

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
                            {item.tipoTalle}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.talle}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.color}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.cantidad}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 whitespace-nowrap">
                            <button className="bg-teal-400 py-2 px-4 text-gray-900 rounded-md hover:bg-sky-500">
                                +
                            </button>
                            <button className="bg-teal-400 py-2 px-4 text-gray-900 rounded-md hover:bg-sky-500 ml-4">
                                -
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
