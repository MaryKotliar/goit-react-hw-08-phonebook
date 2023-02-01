import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { AppBar } from '@mui/material';

export const AppBarView = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar
      position="static"
      sx={{
        mb: 2,
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        flexDirection: 'row',
        p: 2,
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};
