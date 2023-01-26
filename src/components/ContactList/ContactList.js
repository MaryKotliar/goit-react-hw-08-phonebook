import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <>
      <ul>
        {contacts.map(item => (
          <Item key={item.id}>
            <Contact contact={item}></Contact>
          </Item>
        ))}
      </ul>
    </>
  );
};
