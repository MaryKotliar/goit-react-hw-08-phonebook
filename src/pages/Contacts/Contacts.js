import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { selectContacts } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';
import { Typography, Container } from '@mui/material';

export function Contacts() {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}
      >
        Phonebook
      </Typography>
      <ContactForm />
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}
      >
        Contacts
      </Typography>

      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
          {' '}
          Your phonebook is empty. Add first contact!
        </Typography>
      )}

      {contacts.length > 0 && <ContactList />}
      {isLoading && !error && contacts.length === 0 && <Loader />}
    </Container>
  );
}
