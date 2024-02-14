import { useState } from 'react';
import Cards, { Focused } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export const CreditCard = () => {
    const [state, setState] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: '',
    });

    const handleInputChange = (e: any) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleFocusChange = (e: any) => {
        setState({
            ...state,
            focus: e.target.name,
        });
    };

    const processPayment = () => {
        console.log('number => ', state.number);
        console.log('name => ', state.name);
        console.log('expiry => ', state.expiry);
        console.log('cvc => ', state.cvc);
        console.log(JSON.stringify(state));
    };

    return (
        <div className="">
            <div className="">
                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus as Focused | undefined}
                />
                <form className="mt-10">
                    <div className="p-3 flex w-4/5 justify-end">
                        <label htmlFor="number" className="mr-5">
                            Número de la tarjeta:
                        </label>
                        <input
                            type="number"
                            name="number"
                            id="number"
                            maxLength={16}
                            className="bg-white rounded-md h-8 w-72 text-gray-900 p-2"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="p-3 flex w-4/5 justify-end">
                        <label htmlFor="name" className="mr-5">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength={30}
                            className="bg-white rounded-md h-8 w-72 text-gray-900 p-2"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="p-3 flex w-4/5 justify-end">
                        <label htmlFor="expiry" className="mr-5">
                            Fecha de expiración:
                        </label>
                        <input
                            type="text"
                            name="expiry"
                            id="expiry"
                            maxLength={4}
                            className="bg-white rounded-md h-8 w-72 text-gray-900 p-2"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="p-3 flex w-4/5 justify-end">
                        <label htmlFor="cvc" className="mr-5">
                            CVC:
                        </label>
                        <input
                            type="text"
                            name="cvc"
                            id="cvc"
                            maxLength={4}
                            className="bg-white rounded-md h-8 w-72 text-gray-900 p-2"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>

                    <button
                        onClick={processPayment}
                        type="button"
                        className="btn btn-success btn-block btn-lg">
                        Pagar
                    </button>
                </form>
            </div>
        </div>
    );
};
