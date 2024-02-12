import { Link } from 'react-router-dom';

interface Props {
    data: {
        id: number;
        color: string;
        talle: string;
        tipoTalle: string;
        marca: string;
        categoria: string;
    }[];
}

export const TableForColorList = ({ data }: Props) => {
    const headers = ['Color', 'Accion'];
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
                            {item.color}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap flex ">
                            <Link
                                to={`#`}
                                className="py-2 px-4 text-white rounded-md hover:bg-black bg-cyan-500 flex-auto mr-2">
                                Modificar
                            </Link>
                            <Link
                                to={`#`}
                                className="py-2 px-4 text-white rounded-md bg-red-600 hover:bg-black flex-auto ml-2">
                                Eliminar
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const TableForCategoriaList = ({ data }: Props) => {
    const headers = ['Categoria', 'Accion'];
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
                            {item.categoria}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap flex ">
                            <Link
                                to={`#`}
                                className="py-2 px-4 text-white rounded-md hover:bg-black bg-cyan-500 flex-auto mr-2">
                                Modificar
                            </Link>
                            <Link
                                to={`#`}
                                className="py-2 px-4 text-white rounded-md bg-red-600 hover:bg-black flex-auto ml-2">
                                Eliminar
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const TableForMarcaList = ({ data }: Props) => {
    const headers = ['Marca', 'Accion'];
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
                            {item.marca}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap flex ">
                            <Link
                                to={`#`}
                                className="py-2 px-4 text-white rounded-md hover:bg-black bg-cyan-500 flex-auto mr-2">
                                Modificar
                            </Link>
                            <Link
                                to={`#`}
                                className="py-2 px-4 text-white rounded-md bg-red-600 hover:bg-black flex-auto ml-2">
                                Eliminar
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const TableForTalleList = ({ data }: Props) => {
    const headers = ['Talle', 'Tipo de talle', 'Accion'];
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
                            {item.talle}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-5 whitespace-nowrap">
                            {item.tipoTalle}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-4 py-5 whitespace-nowrap flex ">
                            <Link
                                to={`#`}
                                className="py-2 px-4 text-white rounded-md hover:bg-black bg-cyan-500 flex-auto mr-2">
                                Modificar
                            </Link>
                            <Link
                                to={`#`}
                                className="py-2 px-4 text-white rounded-md bg-red-600 hover:bg-black flex-auto ml-2">
                                Eliminar
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
