import Select from 'react-select';

const customStyles = {
    // control: (provided: any, _state: any) => ({
    //     ...provided,
    //     borderRadius: 7,
    // }),
    control: (baseStyles: any, state: { isFocused: any }) => ({
        ...baseStyles,
        borderColor: state.isFocused ? 'grey' : 'red',
    }),
    option: (provided: any, _state: { isSelected: any }) => ({
        ...provided,
        padding: 12,
        minHeight: '46px',
        height: '46px',
        color: 'black', // Añade esta línea para cambiar el color del texto a negro
    }),
    valueContainer: (provided: any, _state: any) => ({
        ...provided,
        height: '46px',
        padding: '0 6px',
    }),
    input: (provided: any, _state: any) => ({
        ...provided,
        margin: '0px',
    }),
    indicatorSeparator: (_state: any) => ({
        display: 'none',
    }),
    indicatorsContainer: (provided: any, _state: any) => ({
        ...provided,
        height: '46px',
    }),
};

interface Props {
    onChange: (value: { value: string | number; label: string } | null) => void;
    options: { value: string | number; label: string }[];
    value: { value: string | number; label: string } | null;
}

export const ReactSelect = ({ onChange, options, value }: Props) => {
    return (
        <Select
            // className=""
            styles={customStyles}
            options={options}
            value={value}
            onChange={onChange}
            isSearchable={false}
            placeholder={'Seleccione...'}
            // defaultValue={optionValueProfesion}
            theme={theme => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary25: '#E6E6E6',
                    primary: '#FB923C',
                },
            })}
        />
    );
};
