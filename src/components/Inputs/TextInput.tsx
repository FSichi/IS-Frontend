/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';


interface Props {
    registerForm: any
    inputName: string
    inputTitle?: string
    inputType: string
    keyPressEvent?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string
    customInputClassName?: string
    customContainerClassName?: string
}

export const TextInput = ({
    registerForm, inputName, inputTitle, inputType, keyPressEvent, placeholder,
    customInputClassName, customContainerClassName
}: Props) => {
    return (
        <div className={`${customContainerClassName}`}>
            {inputTitle && <p className="text-lg">{inputTitle}</p>}
            <input
                type={inputType} name={inputName}
                placeholder={placeholder}
                onKeyPress={keyPressEvent}
                className={`text-md mt-2 px-2 py-1 rounded-md w-full text-black text-center
                bg-gray-100 border-2 border-gray-300 placeholder-gray-500 shadow-lg shadow-gray-800
                focus:border-orange-600 focus:outline-none formInput
                 ${customInputClassName}`}
                {...registerForm}
            />
        </div>
    )
}