import { Box, TextField } from "@mui/material";

const LoginCenterForm = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 2, gap: 1 }}>
      <TextField label="Email" variant="outlined" size="small" />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        size="small"
      />
    </Box>
  );
};

export default LoginCenterForm;
