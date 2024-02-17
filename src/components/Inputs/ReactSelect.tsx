import Select from 'react-select';

interface Props {
    onChange: (value: { value: string | number; label: string } | null) => void;
    options: { value: string | number; label: string }[];
    value: { value: string | number; label: string } | null;
}

export const ReactSelect = ({ onChange, options, value }: Props) => {
    return (
        <Select
            // styles={customStyles}
            options={options}
            value={value}
            onChange={onChange}
            isSearchable={false}
            placeholder={'Seleccione...'}
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
