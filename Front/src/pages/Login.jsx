import React, { useState, useContext } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        credentials
      );
      login(response.data.token);
      navigate("/");
    } catch (error) {
      setError("Erreur de connexion. Veuillez vérifier vos identifiants.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Connexion
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
            Se connecter
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
