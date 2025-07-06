import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  IconButton,
  Paper,
  Chip,
  Divider,
  AppBar,
  Toolbar,
  Badge,
  Snackbar,
  Alert
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { menuItems } from '../data/menuItems';

function MenuItemView() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const items = menuItems[categoryId] || [];
  const categories = Object.keys(menuItems);

  const [cart, setCart] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
      setSnackbarMessage(`Added another ${item.name} to your order`);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      setSnackbarMessage(`${item.name} added to your order`);
    }
    setSnackbarOpen(true);
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCart(cart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
        setSnackbarMessage(`Removed one ${item.name} from your order`);
      } else {
        setCart(cart.filter((cartItem) => cartItem.id !== item.id));
        setSnackbarMessage(`${item.name} removed from your order`);
      }
      setSnackbarOpen(true);
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Kiosk Header */}
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton 
            edge="start" 
            color="inherit" 
            onClick={() => navigate('/')}
          >
            <ArrowBackIcon />
          </IconButton>
          
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', flexGrow: 1, textAlign: 'center' }}>
            {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
          </Typography>
          
          <IconButton color="inherit" onClick={() => navigate('/checkout')}>
            <Badge badgeContent={getTotalItems()} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Categories on the left (25% width) */}
          <Grid item xs={12} md={3}>
            <Paper 
              elevation={3} 
              sx={{ 
                height: '100%', 
                bgcolor: 'background.paper',
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <Box sx={{ 
                bgcolor: 'primary.main', 
                color: 'white', 
                py: 2, 
                px: 3,
                borderBottom: '1px solid rgba(0,0,0,0.1)'
              }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                  Menu Categories
                </Typography>
              </Box>
              <Box sx={{ 
                maxHeight: '70vh', 
                overflow: 'auto', 
                py: 2,
                px: 2
              }}>
                {categories.map((category) => (
                  <Button 
                    key={category}
                    variant={category === categoryId ? "contained" : "outlined"}
                    color={category === categoryId ? "primary" : "inherit"}
                    fullWidth
                    size="large"
                    sx={{ 
                      mb: 2, 
                      textTransform: 'capitalize',
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: category === categoryId ? 'bold' : 'normal',
                      boxShadow: category === categoryId ? 2 : 0,
                    }}
                    onClick={() => navigate(`/menu/${category}`)}
                  >
                    {category}
                  </Button>
                ))}
              </Box>
            </Paper>
          </Grid>
          
          {/* Menu items on the right (75% width) */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {items.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      borderRadius: 2,
                      overflow: 'hidden',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="180"
                        image={item.image}
                        alt={item.name}
                        sx={{ objectFit: 'cover' }}
                      />
                      <Chip 
                        label={`£${item.price.toFixed(2)}`}
                        color="secondary"
                        sx={{ 
                          position: 'absolute', 
                          top: 12, 
                          right: 12,
                          fontWeight: 'bold',
                          fontSize: '1rem',
                          px: 1
                        }}
                      />
                    </Box>
                    
                    <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
                      <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                    
                    <Divider />
                    
                    <Box sx={{ 
                      p: 2, 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      bgcolor: 'background.default'
                    }}>
                      {!cart.find((cartItem) => cartItem.id === item.id) ? (
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          size="large"
                          onClick={() => addToCart(item)}
                          startIcon={<AddIcon />}
                        >
                          Add to Order
                        </Button>
                      ) : (
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          bgcolor: 'primary.light',
                          borderRadius: 2,
                          p: 1
                        }}>
                          <IconButton
                            color="primary"
                            onClick={() => removeFromCart(item)}
                            sx={{ 
                              bgcolor: 'white',
                              '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                            }}
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                            {cart.find((cartItem) => cartItem.id === item.id).quantity}
                          </Typography>
                          <IconButton
                            color="primary"
                            onClick={() => addToCart(item)}
                            sx={{ 
                              bgcolor: 'white',
                              '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                            }}
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>
                      )}
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      
      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={2000} 
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity="success" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default MenuItemView;
