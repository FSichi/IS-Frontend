import React from 'react';
import Select from 'react-select';

export const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        borderRadius: 7,
    }),
    option: (provided: any, state: { isSelected: any }) => ({
        ...provided,
        color: state.isSelected ? 'black' : 'black',
        padding: 12,
        minHeight: '46px',
        height: '46px',
    }),
    valueContainer: (provided: any, state: any) => ({
        ...provided,
        height: '46px',
        padding: '0 6px',
    }),
    input: (provided: any, state: any) => ({
        ...provided,
        margin: '0px',
    }),
    indicatorSeparator: (state: any) => ({
        display: 'none',
    }),
    indicatorsContainer: (provided: any, state: any) => ({
        ...provided,
        height: '46px',
    }),
};

interface Props {
    onChange: (value: string, label: string) => void;
}

export const ReactSelect = ({ onChange }: Props) => {
    return (
        <Select
            className="font-bold text-center text-white mt-2"
            styles={customStyles}
            options={[
                { value: '1', label: 'Opción 1' },
                { value: '2', label: 'Opción 2' },
            ]}
            onChange={newValue => {
                if (newValue) {
                    onChange(newValue.value, newValue.label);
                }
            }}
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
