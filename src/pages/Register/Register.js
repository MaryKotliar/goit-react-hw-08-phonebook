import { Container } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { selectIsLoading, selectError } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

export default function Register() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Container>
      <title>Registration</title>
      <RegisterForm />
      {isLoading && !error && <CircularProgress />}
    </Container>
  );
}
