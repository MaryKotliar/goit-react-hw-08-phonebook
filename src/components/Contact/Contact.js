import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { useState } from 'react';
import { LoaderWatch } from 'components/Loader/Loader';
import { Typography, Button, Box } from '@mui/material';
export const Contact = ({ contact: { name, number, id } }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContacts(id));
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1">
        {name}: {number}
      </Typography>
      <Button
        size="small"
        type="button"
        onClick={handleDelete}
        disabled={isDeleting && isLoading}
        variant="outlined"
        sx={{ ml: 2 }}
      >
        Delete {isDeleting && <LoaderWatch />}
      </Button>
    </Box>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
