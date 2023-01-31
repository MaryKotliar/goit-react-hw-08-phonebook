import { LinkNav } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <LinkNav to="/">Home</LinkNav>
      {isLoggedIn && <LinkNav to="/contacts">Contacts</LinkNav>}
    </nav>
  );
};
