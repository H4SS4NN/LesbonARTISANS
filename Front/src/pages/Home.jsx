import React from "react";
import ProductList from "../components/ProductList";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => (
  <Container>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Typography variant="h4" component="h1">
        Liste des produits
      </Typography>
      <Button component={Link} to="/create" variant="contained" color="primary">
        Ajouter un produit
      </Button>
    </Box>
    <ProductList />
  </Container>
);

export default Home;
