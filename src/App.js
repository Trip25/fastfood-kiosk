import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CategoryView from './components/CategoryView';
import MenuItemView from './components/MenuItemView';
import OrderSummary from './components/OrderSummary';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D92B04', // Vibrant red like KFC/McDonald's
      dark: '#B71C1C',
      light: '#FF5722',
    },
    secondary: {
      main: '#FFD600', // Yellow accent for contrast
      dark: '#FFC107',
      light: '#FFEB3B',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    error: {
      main: '#D50000',
    },
    success: {
      main: '#2E7D32',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.2rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 16px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        containedPrimary: {
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<CategoryView />} />
          <Route path="/menu/:categoryId" element={<MenuItemView />} />
          <Route path="/order" element={<OrderSummary />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
