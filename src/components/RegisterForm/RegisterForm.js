import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useState } from 'react';
import { TextField, Box, Button, FormHelperText } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
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
      <FormControl sx={{ mt: 2, width: '320' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password1">Password</InputLabel>
        <OutlinedInput
          variant="outlined"
          name="password"
          id="outlined-adornment-password1"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        <FormHelperText>
          Password must contain numbers and letters
        </FormHelperText>
      </FormControl>
      <Button sx={{ mt: 2 }} variant="outlined" type="submit">
        Register
      </Button>
    </Box>
  );
};
