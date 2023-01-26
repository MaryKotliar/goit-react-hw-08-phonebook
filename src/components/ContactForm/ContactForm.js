import { nanoid } from 'nanoid';
import { Form, BtnSubmit } from './ContactForm.styled';
import { useState, useEffect } from 'react';
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { LoaderWatch } from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/contacts/selectors';
const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    if (isSubmitting && !isLoading) {
      setIsSubmitting(false);
    }
  }, [isLoading, isSubmitting]);

  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
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
      <Form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />

        <label htmlFor={numberInputId}>Number</label>
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />

        <BtnSubmit type="submit" disabled={isSubmitting}>
          Add contact{isSubmitting && <LoaderWatch />}
        </BtnSubmit>
      </Form>
    </>
  );
};
