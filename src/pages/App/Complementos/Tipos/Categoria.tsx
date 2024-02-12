import { TableForCategoriaList } from '../../../../components/Table/TableForComplementosList';
import { tableCategoriasData } from '../../../../data/mocks/tableComplementosData';

export const Categoria = () => {
    return (
        <section className="p-5">
            <div className="md:flex bg-gray-800 rounded-lg shadow-lg shadow-gray-400 p-5">
                <div className="md:w-1/2 p-5">
                    <div className="bg-white rounded-lg">
                        <TableForCategoriaList data={tableCategoriasData} />
                    </div>
                </div>
                <div className="md:w-1/2 p-5">
                    <form action="" className=" bg-white rounded-lg p-5">
                        <div>
                            <h1 className="text-gray-900 text-xl font-medium text-center">
                                Gestion
                            </h1>
                        </div>
                        <div className="border-b border-gray-400 mt-3"></div>
                        <div className="mb-4">
                            <h3>Inputs here</h3>
                        </div>
                        <div></div>
                    </form>
                </div>
            </div>
        </section>
    );
};
