import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { FormHelperText } from '@mui/material';
import { TextField, Box, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
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
          inputProps={{
            pattern: '^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$',
          }}
        />

        <FormControl sx={{ mt: 2, width: '320' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            variant="outlined"
            name="password"
            id="outlined-adornment-password"
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
          Log In
        </Button>
      </Box>
    </>
  );
};

// [a-zA-Z0-9+_. -]
// /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
