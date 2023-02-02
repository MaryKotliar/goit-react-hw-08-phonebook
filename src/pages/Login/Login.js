import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container } from '@mui/material';
import { selectIsLoading, selectError } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Container>
      <title>Login</title>
      <LoginForm />
      {isLoading && !error && <CircularProgress />}
    </Container>
  );
}
