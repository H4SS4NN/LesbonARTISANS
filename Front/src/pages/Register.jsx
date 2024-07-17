import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/register", credentials);
      navigate("/login");
    } catch (error) {
      setError("Erreur d'inscription. Veuillez réessayer.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Inscription
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          name="username"
          label="Nom d'utilisateur"
          value={credentials.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="password"
          label="Mot de passe"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        {error && <Typography color="error">{error}</Typography>}
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            S'inscrire
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
