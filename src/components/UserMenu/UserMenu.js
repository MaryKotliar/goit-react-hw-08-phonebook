import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import toast from 'react-hot-toast';
import { Wrapper } from './UserMenu.styled';
import { Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const onLogOut = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => toast.success(`${user.name} is successfully logout`))
      .catch(() => toast.error('Something is wrong. Please try again'));
  };

  return (
    <Wrapper>
      <Typography variant="body1">Welcome, {user.name}</Typography>
      <Button variant="outlined" type="button" onClick={onLogOut}>
        Logout
      </Button>
    </Wrapper>
  );
};
