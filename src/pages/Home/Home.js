import { Typography, Container } from '@mui/material';
export default function Home() {
  return (
    <Container>
      <Typography
        variant="h3"
        sx={{ textAlign: 'center', fontWeight: 700, color: 'coral' }}
      >
        Welcome to the app "Phonebook!"
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 700 }}>
        Here you can store a list of your contacts and manage them. Enjoy with
        pleasure.
      </Typography>
    </Container>
  );
}
