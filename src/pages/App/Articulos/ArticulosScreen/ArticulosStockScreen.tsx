import { ActionButton } from '../../../../components/Buttons/ActionButton';
import { TextInput } from '../../../../components/Inputs/TextInput';
import { PageHeader } from '../../../../components/PageHeader/PageHeader';

export const ArticulosStockScreen = () => {
    return (
        <section>
            <PageHeader title="Articulos en Stock" />
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
            <div className="grid  bg-gray-800 rounded-lg grid-rows-3 grid-flow-col gap-4 m-5 p-4">
                <div className="row-span-4 bg-pink-500">01</div>
                <div className="row-span-2 col-span 2 bg-orange-500">02</div>
                <div className="row-span-2 col-span 2 bg-violet-700">03</div>
            </div>
        </section>
    );
};
