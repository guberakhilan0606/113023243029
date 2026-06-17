import { Container, Paper, Typography } from "@mui/material";

function App() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5">
          Campus Notifications
        </Typography>

        <Typography sx={{ marginTop: 1 }}>
          This app shows campus notifications and priority notifications.
        </Typography>
      </Paper>
    </Container>
  );
}

export default App;