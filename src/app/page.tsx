import { Box, Button, TextField, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box component="form" m={5}>
        <Box mb={2}>
          <Typography variant="h4" gutterBottom>Mui Form</Typography>
        </Box>
        <Box mb={2}>
          <TextField name="firstName" label="First Name" />
        </Box>
        <Box mb={2}> 
          <TextField name="lastName" label="Last Name" />
        </Box>
        <Box mb={2}>
          <TextField name="email" label="Email" type="email" />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </main>
  );
}
