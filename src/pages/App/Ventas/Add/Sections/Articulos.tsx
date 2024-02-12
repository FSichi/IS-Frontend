import { ActionButton } from '../../../../../components/Buttons/ActionButton';
import { SelectInput } from '../../../../../components/Inputs/SelectInput';
import { TextInput } from '../../../../../components/Inputs/TextInput';
import { TableForArticulosStock } from './TableForArticulosStock';
import { TableForArticulosVenta } from './TableForArticulosVenta';

const dataInventario = {
    idArticulo: 1,
    codigo: '123456',
    articulo: 'Camisa Termica de Futbol',
    categoria: 'Manga Larga',
    marca: 'Nike',
    precio: 100,
    filters: {
        tipoTalle: 1,
        talle: 1,
        color: 1,
    },
    inventario: [
        {
            id: 1,
            cantidad: 7,
            color: 'Azul',
            tipoTalle: 'Americano',
            talle: 'S',
        },
        {
            id: 2,
            cantidad: 12,
            color: 'Blanco',
            tipoTalle: 'Americano',
            talle: 'S',
        },
        {
            id: 3,
            cantidad: 4,
            color: 'Negro',
            tipoTalle: 'Americano',
            talle: 'M',
        },
    ],
};

const dataCarrito = [
    {
        id: 1,
        cantidad: 1,
        color: 'Azul',
        tipoTalle: 'Americano',
        talle: 'S',
    },
    {
        id: 2,
        cantidad: 2,
        color: 'Blanco',
        tipoTalle: 'Americano',
        talle: 'S',
    },
];

export const Articulos = () => {
    return (
        <section className="bg-gray-800 rounded-md p-5">
            <div className=" p-3 flex rounded-md">
                <div className="flex w-1/3">
                    <TextInput
                        inputName={'name'}
                        inputType={'text'}
                        placeholder={'Codigo de Articulo...'}
                        keyPressEvent={() => {}}
                        registerForm={() => {}}
                        customContainerClassName="w-full"
                        customInputClassName={'mt-0 h-10'}
                    />

                    <ActionButton
                        title="Buscar"
                        action={() => {}}
                        customClass="bg-gray-900 ml-3 hover:bg-indigo-400 hover:text-gray-900"
                    />
                </div>

                <div className="border-gray-200 border-l-2 ml-10"></div>

                <div className="flex ml-10 w-2/3">
                    <SelectInput
                        inputName={'tipoTalle'}
                        placeholder
                        placeholderText="Tipo de Talle..."
                        options={[
                            { value: 1, label: 'Americano' },
                            { value: 2, label: 'Europeo' },
                        ]}
                        registerForm={() => {}}
                        customContainerClassName="mr-5 w-1/3 ml-3"
                        customInputClassName="h-10 mt-0"
                    />
                    <SelectInput
                        inputName={'talle'}
                        placeholder
                        placeholderText="Talle..."
                        options={[
                            { value: 1, label: '15' },
                            { value: 2, label: '16' },
                        ]}
                        registerForm={() => {}}
                        customContainerClassName="mr-5 w-1/3 ml-3"
                        customInputClassName="h-10 mt-0"
                    />
                    <SelectInput
                        inputName={'color'}
                        placeholder
                        placeholderText="Color..."
                        options={[
                            { value: 1, label: 'Azul' },
                            { value: 2, label: 'Verde' },
                            { value: 3, label: 'Rojo' },
                            { value: 4, label: 'Amarillo' },
                            { value: 5, label: 'Negro' },
                        ]}
                        registerForm={() => {}}
                        customContainerClassName="mr-5 w-1/3 ml-3"
                        customInputClassName="h-10 mt-0"
                    />
                </div>
            </div>

            <div className="flex w-full mt-5">
                <div className="w-1/2 ">
                    <div className="bg-gray-500 mr-2 p-3 rounded-md">
                        <div className="flex justify-between">
                            <h1 className="text-lg mb-3">Articulo Seleccionado:</h1>
                            {/* <ActionButton
                                title="X"
                                action={() => {}}
                                customClass="bg-red-800 m-3 w-10"
                            /> */}
                        </div>
                        <div className="p-3 bg-gray-800 rounded-md">
                            <h1 className="text-lg">
                                <span className="text-red-400 font-bold text-lg">Elemento:</span>{' '}
                                Camisa Manga Larga Futbol
                            </h1>
                            <h1 className="text-lg">
                                <span className="text-red-400 font-bold text-lg">Categoria:</span>{' '}
                                Manga Larga
                            </h1>
                            <h1 className="text-lg">
                                <span className="text-red-400 font-bold">Marca:</span> Nike
                            </h1>
                        </div>
                        <div className="border-gray-200 border-b-2 mt-3"></div>
                        <h1 className="mt-5 mb-3">Listado de Unidades en Inventario:</h1>

                        <TableForArticulosStock data={dataInventario.inventario} />
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="bg-gray-500 ml-2 p-3 rounded-md">
                        <h1 className="text-center text-xl font-bold mb-3">
                            Articulos Agregados a la Venta
                        </h1>
                        <TableForArticulosVenta data={dataCarrito} />
                    </div>
                </div>
            </div>
        </section>
    );
};
