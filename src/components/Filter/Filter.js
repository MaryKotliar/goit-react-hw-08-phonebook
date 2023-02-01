import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/filterSlice';
import { Box, TextField } from '@mui/material';
const filterInputId = nanoid();
export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 100,
        justifyContent: 'center',
      }}
    >
      <TextField
        onChange={onChange}
        label="Find contacts by name"
        type="text"
        name="filter"
        value={value}
        id={filterInputId}
        variant="outlined"
      />
    </Box>
  );
};
