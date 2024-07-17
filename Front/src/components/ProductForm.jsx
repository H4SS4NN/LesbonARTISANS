import { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams, Link } from "react-router-dom";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    type: "",
    price: "",
    rating: "",
    warranty_years: "",
    available: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/products/${id}`)
        .then((response) => setProduct(response.data))
        .catch((error) =>
          console.error("Erreur lors de la récupération du produit:", error)
        );
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setProduct({ ...product, available: e.target.checked });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = product.name ? "" : "Ce champ est requis.";
    tempErrors.type = product.type ? "" : "Ce champ est requis.";
    tempErrors.price =
      product.price && !isNaN(product.price)
        ? ""
        : "Ce champ doit être un nombre.";
    tempErrors.rating =
      product.rating && !isNaN(product.rating)
        ? ""
        : "Ce champ doit être un nombre.";
    tempErrors.warranty_years =
      product.warranty_years && !isNaN(product.warranty_years)
        ? ""
        : "Ce champ doit être un nombre.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      if (id) {
        await axios.patch(`http://localhost:3000/api/products/${id}`, product);
      } else {
        await axios.post("http://localhost:3000/api/products", product);
      }
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde du produit:", error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {id ? "Modifier le produit" : "Créer un nouveau produit"}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          name="name"
          label="Nom"
          value={product.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          name="type"
          label="Type"
          value={product.type}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.type}
          helperText={errors.type}
        />
        <TextField
          name="price"
          label="Prix"
          value={product.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.price}
          helperText={errors.price}
        />
        <TextField
          name="rating"
          label="Note"
          value={product.rating}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.rating}
          helperText={errors.rating}
        />
        <TextField
          name="warranty_years"
          label="Années de garantie"
          value={product.warranty_years}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.warranty_years}
          helperText={errors.warranty_years}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={product.available}
              onChange={handleCheckboxChange}
            />
          }
          label="Disponible"
        />
        <Box sx={{ mt: 2, position: "relative" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mr: 2 }}
          >
            {id ? "Sauvegarder les modifications" : "Créer"}
          </Button>
          <Button
            component={Link}
            to="/"
            variant="outlined"
            color="secondary"
            disabled={loading}
          >
            Retour
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default ProductForm;
