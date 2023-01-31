import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { TextField, Box, Button } from '@mui/material';

import toast from 'react-hot-toast';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => toast.success('Registration is success'))
      .catch(() =>
        toast.error(
          'Registration failed. Perhaps such a user already exists. Please try again'
        )
      );
    form.reset();
  };

  return (
    <Box
      onSubmit={handleSubmit}
      autoComplete="off"
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 320,
        mx: 'auto',
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        required
        type="text"
        name="name"
        sx={{ mt: 2 }}
      />
      <TextField
        label="Email"
        variant="outlined"
        required
        type="email"
        name="email"
        sx={{ mt: 2 }}
      />
      <TextField
        label="Password"
        variant="outlined"
        required
        type="password"
        name="password"
        sx={{ mt: 2 }}
      />
      <Button sx={{ mt: 2 }} variant="outlined" type="submit">
        Register
      </Button>
    </Box>
  );
};
