import PropTypes from 'prop-types';
import { Button, Wrapper } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { LoaderWatch } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { useState } from 'react';
export const Contact = ({ contact: { name, number, id } }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContacts(id));
  };
  return (
    <Wrapper>
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        onClick={handleDelete}
        disabled={isDeleting && isLoading}
      >
        Delete {isDeleting && <LoaderWatch />}
      </Button>
    </Wrapper>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
