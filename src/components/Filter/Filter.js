import { nanoid } from 'nanoid';
import { Wrapper } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/filterSlice';
const filterInputId = nanoid();
export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };
  return (
    <Wrapper>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        onChange={onChange}
        type="text"
        name="filter"
        value={value}
        id={filterInputId}
      />
    </Wrapper>
  );
};
