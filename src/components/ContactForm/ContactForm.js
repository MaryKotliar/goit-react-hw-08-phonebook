import { nanoid } from 'nanoid';

import { useState, useEffect } from 'react';
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { LoaderWatch } from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/contacts/selectors';
import { TextField, Box, Button, Alert, AlertTitle } from '@mui/material';

const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const isInContacts = contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  useEffect(() => {
    if (isSubmitting && !isLoading) {
      setIsSubmitting(false);
    }
  }, [isLoading, isSubmitting]);

  const handleSubmit = event => {
    event.preventDefault();

    if (isInContacts) {
      return;
    }

    dispatch(addContacts({ name, number }));
    setIsSubmitting(true);
    setName('');
    setNumber('');
  };
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      {isInContacts && (
        <Alert severity="info" sx={{ mb: 2 }}>
          <AlertTitle>Info</AlertTitle>
          {name} is already in contacts. Enter another name
        </Alert>
      )}
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 320,
          mx: 'auto',
          border: '1px solid lightblue',
          '& > :not(style)': { m: 1 },
          borderRadius: 1,
          p: 1,
          mb: 2,
        }}
        autoComplete="off"
      >
        <TextField
          label="Name"
          variant="outlined"
          required
          type="text"
          name="name"
          sx={{ mt: 2 }}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nameInputId}
          onChange={handleChange}
        />

        <TextField
          label="Number"
          variant="outlined"
          required
          type="tel"
          name="number"
          sx={{ mt: 2 }}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={numberInputId}
          onChange={handleChange}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          sx={{ mt: 2 }}
          variant="outlined"
        >
          Add contact{isSubmitting && <LoaderWatch />}
        </Button>
      </Box>
    </>
  );
};
