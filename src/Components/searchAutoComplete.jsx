import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const SearchAutocomplete = ({ options, label }) => {
    const [value, setValue] = useState('');

    // options é um array que será usado para preencher as sugestões no componente de Autocomplete.
    // label será texto será exibido no campo de entrada do componente Autocomplete.

    return (
        <Autocomplete
            options={options}
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            renderInput={(params) => (
                <TextField {...params} label={label} variant="outlined" />
            )}
            getOptionLabel={(option) => option}
        />
    );
};

SearchAutocomplete.propTypes = {
    options: PropTypes.array.isRequired,
    label: PropTypes.string
};

export default SearchAutocomplete;
