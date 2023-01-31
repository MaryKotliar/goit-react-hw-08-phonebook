import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import toast from 'react-hot-toast';

import { TextField, Box, Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => toast.success('Login is success'))
      .catch(() =>
        toast.error(
          'Something wrong. Check your login and password and try again'
        )
      );
    form.reset();
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 320,
          mx: 'auto',
        }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          label="Email"
          variant="outlined"
          required
          type="email"
          name="email"
          sx={{ mt: 2 }}
        />
        {/* <Text>
          Email
          <input type="email" name="email" required />
        </Text> */}
        <TextField
          label="Password"
          variant="outlined"
          required
          type="password"
          name="password"
          sx={{ mt: 2 }}
        />
        <Button sx={{ mt: 2 }} variant="outlined" type="submit">
          Log In
        </Button>
      </Box>
    </>
  );
};
