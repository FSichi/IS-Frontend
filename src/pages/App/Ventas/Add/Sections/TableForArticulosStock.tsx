import { TextInput } from '../../../../../components/Inputs/TextInput';

interface Props {
    data: {
        id: number;
        color: string;
        tipoTalle: string;
        talle: string;
        cantidad: number;
    }[];
}

export const TableForArticulosStock = ({ data }: Props) => {
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
                        <td className="text-sm text-gray-900 font-light px-4 whitespace-nowrap flex justify-center mt-3">
                            <TextInput
                                inputName={'name'}
                                inputType={'number'}
                                keyPressEvent={() => {}}
                                registerForm={() => {}}
                                customContainerClassName="w-20 -mt-2"
                                customInputClassName={'mt-0 shadow-none'}
                            />
                            <button
                                // to={`/app/ventas/${item.id}`}
                                className="bg-teal-400 py-2 px-4 text-gray-900 rounded-md hover:bg-sky-500 ml-4">
                                Agregar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
