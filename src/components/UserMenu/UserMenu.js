import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser, selectIsLoading, selectError } from 'redux/auth/selectors';
import CircularProgress from '@mui/material/CircularProgress';
import toast from 'react-hot-toast';

import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const onLogOut = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => toast.success(`${user.name} is successfully logout`))
      .catch(() => toast.error('Something is wrong. Please try again'));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="body1">Welcome, {user.name}</Typography>
      <Button
        variant="outlined"
        type="button"
        onClick={onLogOut}
        disabled={isLoading}
        sx={{
          ml: 1,
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'aliceblue',
          },
        }}
      >
        Logout{isLoading && !error && <CircularProgress size={12} />}
      </Button>
    </Box>
  );
};
