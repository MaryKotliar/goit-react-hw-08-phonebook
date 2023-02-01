import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Box, List, ListItem } from '@mui/material';
export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <List>
        {contacts.map(item => (
          <ListItem key={item.id}>
            <Contact contact={item}></Contact>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
