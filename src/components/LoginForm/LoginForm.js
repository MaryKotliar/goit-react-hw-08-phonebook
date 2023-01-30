import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import toast from 'react-hot-toast';

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
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};
