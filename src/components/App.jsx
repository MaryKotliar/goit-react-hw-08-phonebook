import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container';
import { GlobalStyle } from './GlobalStyle';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { selectContacts } from 'redux/contacts/selectors';
import { Loader } from './Loader/Loader';

export function App() {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        'Your phonebook is empty. Add first contact!'
      )}

      {contacts.length > 0 && <ContactList />}
      {isLoading && !error && <Loader />}
      <GlobalStyle />
    </Container>
  );
}
