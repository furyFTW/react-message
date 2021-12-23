import React, { memo, useState } from "react";
import { Button, TextField, Box } from "@mui/material";

const LoginComponent = ({ onChange }) => {
  const [username, setUsername] = useState("");

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <TextField
        style={{ width: "50%" }}
        id="username"
        label="Username"
        variant="outlined"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <Button variant="text" onClick={() => onChange(username)}>
        Log in
      </Button>
    </Box>
  );
};

const Login = memo(LoginComponent);

export default Login;
