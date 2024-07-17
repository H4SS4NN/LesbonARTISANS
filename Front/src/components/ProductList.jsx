import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression du produit:", error);
    }
  };

  return (
    <Box>
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          <TransitionGroup>
            {products.map((product) => (
              <CSSTransition key={product._id} timeout={500} classNames="item">
                <React.Fragment>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography variant="h6">{product.name}</Typography>
                      }
                      secondary={
                        <>
                          <Typography component="span">
                            Prix: {product.price} €
                          </Typography>
                          <Typography
                            component="span"
                            sx={{ display: "block" }}
                          >
                            Note: {product.rating}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{ display: "block" }}
                          >
                            Années de garantie: {product.warranty_years}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{ display: "block" }}
                          >
                            Disponible: {product.available ? "Oui" : "Non"}
                          </Typography>
                        </>
                      }
                    />
                    <ListItemSecondaryAction>
                      <Button
                        component={Link}
                        to={`/edit/${product._id}`}
                        variant="contained"
                        sx={{ marginRight: 1 }}
                      >
                        Modifier
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(product._id)}
                      >
                        Supprimer
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </List>
      )}
    </Box>
  );
};

export default ProductList;
