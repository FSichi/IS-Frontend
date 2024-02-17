interface Props {
    data: {
        id: number;
        codigoBarra: number;
        descripcion: string;
        precioFinal: number;
        marca: string;
        categoria: string;
        estado: string;
    }[];
}

export const TableForArticulosBaseList = ({ data }: Props) => {
    const headers = [
        'Codigo de barra',
        'Descripcion',
        'Precio',
        'Marca',
        'Categoria',
        'Estado',
        'Accion',
    ];

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
                            {item.codigoBarra}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.descripcion}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.precioFinal}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.marca}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.categoria}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            <p
                                className={`rounded-md py-1 ${item.estado === 'Finalizado' ? 'bg-teal-300 ' : 'bg-indigo-300'}`}>
                                {item.estado}
                            </p>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap">
                            <button className="py-2 px-4 text-white rounded-md hover:bg-black bg-cyan-500 flex-auto mr-2">
                                Modificar
                            </button>
                            <button className="py-2 px-4  text-white rounded-md bg-red-600 hover:bg-black flex-auto ml-2">
                                Desactivar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
