import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction, 
  Button,
  Grid,
  Paper,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Chip
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  
  // In a real application, you would get this data from your order state
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      item: {
        name: 'Classic Burger',
        price: 5.99,
        image: 'https://via.placeholder.com/100x100?text=Burger'
      },
      options: ['Extra Cheese', 'Add Bacon'],
      quantity: 2,
      total: 13.98
    },
    {
      id: 2,
      item: {
        name: 'French Fries',
        price: 2.99,
        image: 'https://via.placeholder.com/100x100?text=Fries'
      },
      options: [],
      quantity: 1,
      total: 2.99
    },
    {
      id: 3,
      item: {
        name: 'Chocolate Shake',
        price: 3.49,
        image: 'https://via.placeholder.com/100x100?text=Shake'
      },
      options: ['Large Size'],
      quantity: 1,
      total: 3.49
    }
  ]);

  const getTotal = () => {
    return orderItems.reduce((total, item) => total + item.total, 0);
  };
  
  const getSubtotal = () => {
    return getTotal();
  };
  
  const getTax = () => {
    return getTotal() * 0.1; // 10% tax
  };
  
  const getFinalTotal = () => {
    return getSubtotal() + getTax();
  };
  
  const handleNext = () => {
    if (activeStep === 1) {
      // Process payment
      setProcessing(true);
      setTimeout(() => {
        setProcessing(false);
        setOrderComplete(true);
        setOrderNumber(`KSK-${Math.floor(Math.random() * 10000)}`);
      }, 2000);
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };
  
  const handleBack = () => {
    if (activeStep === 0) {
      navigate(-1);
    } else {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };
  
  const increaseQuantity = (itemId) => {
    setOrderItems(orderItems.map(item => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + 1;
        return {
          ...item,
          quantity: newQuantity,
          total: parseFloat((item.item.price * newQuantity).toFixed(2))
        };
      }
      return item;
    }));
  };
  
  const decreaseQuantity = (itemId) => {
    setOrderItems(orderItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity,
          total: parseFloat((item.item.price * newQuantity).toFixed(2))
        };
      }
      return item;
    }));
  };
  
  const removeItem = (itemId) => {
    setOrderItems(orderItems.filter(item => item.id !== itemId));
  };
  
  const steps = ['Review Order', 'Payment', 'Confirmation'];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pb: 4 }}>
      {/* Kiosk Header */}
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton 
              edge="start" 
              color="inherit" 
              onClick={handleBack}
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
              {orderComplete ? 'Order Confirmed' : 'Checkout'}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {!orderComplete ? (
          <>
            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            
            {activeStep === 0 && (
              <Card sx={{ mb: 3, borderRadius: 2, overflow: 'hidden' }}>
                <Box sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'white', 
                  py: 2, 
                  px: 3,
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Your Order
                  </Typography>
                </Box>
                <List sx={{ py: 0 }}>
                  {orderItems.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <ListItem 
                        sx={{ 
                          py: 2,
                          '&:hover': { bgcolor: 'background.default' }
                        }}
                      >
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          width: '100%' 
                        }}>
                          <Box 
                            component="img" 
                            src={item.item.image} 
                            alt={item.item.name}
                            sx={{ 
                              width: 60, 
                              height: 60, 
                              borderRadius: 1,
                              mr: 2,
                              objectFit: 'cover'
                            }}
                          />
                          <ListItemText
                            primary={
                              <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                                {item.item.name}
                              </Typography>
                            }
                            secondary={
                              <>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                  £{item.item.price.toFixed(2)} each
                                </Typography>
                                {item.options.length > 0 && (
                                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                                    {item.options.map((option, i) => (
                                      <Chip 
                                        key={i} 
                                        label={option} 
                                        size="small" 
                                        sx={{ fontSize: '0.7rem' }}
                                      />
                                    ))}
                                  </Box>
                                )}
                              </>
                            }
                          />
                          
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            ml: 'auto'
                          }}>
                            <Box sx={{ 
                              display: 'flex', 
                              alignItems: 'center',
                              mr: 2,
                              border: '1px solid',
                              borderColor: 'divider',
                              borderRadius: 1,
                              overflow: 'hidden'
                            }}>
                              <IconButton 
                                size="small" 
                                onClick={() => decreaseQuantity(item.id)}
                                sx={{ borderRadius: 0 }}
                              >
                                <RemoveIcon fontSize="small" />
                              </IconButton>
                              <Typography sx={{ px: 2 }}>
                                {item.quantity}
                              </Typography>
                              <IconButton 
                                size="small" 
                                onClick={() => increaseQuantity(item.id)}
                                sx={{ borderRadius: 0 }}
                              >
                                <AddIcon fontSize="small" />
                              </IconButton>
                            </Box>
                            
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: 80 }}>
                              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                £{item.total.toFixed(2)}
                              </Typography>
                              <IconButton 
                                size="small" 
                                color="error" 
                                onClick={() => removeItem(item.id)}
                                sx={{ p: 0.5 }}
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </ListItem>
                      {index < orderItems.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </Card>
            )}
            
            {activeStep === 1 && (
              <Card sx={{ mb: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Payment Method
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    For this demo, no actual payment information is collected.
                    Click "Complete Order" to simulate payment processing.
                  </Typography>
                  
                  {processing && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                      <CircularProgress />
                    </Box>
                  )}
                </CardContent>
              </Card>
            )}
            
            {/* Order Summary Card */}
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Order Summary
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  mb: 1
                }}>
                  <Typography variant="body1">Subtotal</Typography>
                  <Typography variant="body1">£{getSubtotal().toFixed(2)}</Typography>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  mb: 2
                }}>
                  <Typography variant="body1">Tax</Typography>
                  <Typography variant="body1">£{getTax().toFixed(2)}</Typography>
                </Box>
                
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  mb: 2
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>£{getFinalTotal().toFixed(2)}</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={handleBack}
                    fullWidth
                    size="large"
                    disabled={processing}
                  >
                    {activeStep === 0 ? 'Back to Menu' : 'Back'}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    fullWidth
                    size="large"
                    disabled={processing || orderItems.length === 0}
                  >
                    {activeStep === 0 ? 'Proceed to Payment' : 'Complete Order'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card sx={{ borderRadius: 2, textAlign: 'center', py: 4 }}>
            <CheckCircleIcon color="success" sx={{ fontSize: 80, mb: 2 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Thank You!
            </Typography>
            <Typography variant="h6" gutterBottom>
              Your order #{orderNumber} has been confirmed
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 400, mx: 'auto' }}>
              Please proceed to the collection point and show your order number when your name is called.
            </Typography>
            
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate('/')}
              >
                Return to Menu
              </Button>
            </Box>
          </Card>
        )}
      </Container>
    </Box>
  );
};

export default OrderSummary;
