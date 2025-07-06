import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  AppBar,
  Toolbar,
  Paper,
  Divider,
  Container,
} from '@mui/material';

const categories = [
  {
    id: 'burgers',
    name: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    description: 'Classic burgers and variations',
  },
  {
    id: 'chicken',
    name: 'Chicken',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    description: 'Fried chicken, tenders, and wings',
  },
  {
    id: 'sides',
    name: 'Sides',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    description: 'Fries, onion rings, and more',
  },
  {
    id: 'drinks',
    name: 'Drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    description: 'Soft drinks and beverages',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    description: 'Sweet treats to finish your meal',
  },
];

function CategoryView() {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pb: 4 }}>
      {/* Kiosk Header */}
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
            Fast Food Kiosk
          </Typography>
          <Box>
            <Button color="inherit" onClick={() => navigate('/order')}>
              My Order
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Promotional Banner */}
      <Paper 
        sx={{ 
          bgcolor: 'secondary.light', 
          p: 3, 
          mb: 4, 
          borderRadius: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.6)), url(https://via.placeholder.com/1200x200?text=Special+Offers)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Typography variant="h4" component="h2" color="primary.dark" gutterBottom>
            Welcome to Fast Food Kiosk
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Order your favorite meals quickly and easily
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ mt: 2 }}
            onClick={() => navigate('/menu/burgers')}
          >
            Start Ordering
          </Button>
        </Container>
      </Paper>
      
      <Container>
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
          Browse Our Menu
        </Typography>
        
        <Grid container spacing={4}>
          {/* Categories on the left (25% width) */}
          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Menu Categories
                </Typography>
                <Box sx={{ maxHeight: '60vh', overflow: 'auto', pr: 1 }}>
                  {categories.map((category) => (
                    <Button 
                      key={category.id}
                      variant="outlined"
                      color="primary"
                      fullWidth
                      sx={{ mb: 2, textTransform: 'capitalize' }}
                      onClick={() => navigate(`/menu/${category.id}`)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Main content on the right (75% width) */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={4}>
              {categories.map((category) => (
              <Grid item xs={12} sm={6} md={4} key={category.id}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    },
                  }}
                  onClick={() => navigate(`/menu/${category.id}`)}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={category.image}
                    alt={category.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                      {category.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">{category.description}</Typography>
                  </CardContent>
                  <Divider />
                  <Box sx={{ p: 2, bgcolor: 'background.default' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                    >
                      View {category.name}
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CategoryView;
