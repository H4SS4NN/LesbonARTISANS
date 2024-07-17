import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditProduct from "./pages/EditProduct";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const App = () => (
  <Router>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gestion des produits
        </Typography>
      </Toolbar>
    </AppBar>
    <br></br>
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/create" element={<EditProduct />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
