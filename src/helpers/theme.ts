import { createTheme } from '@mui/material/styles';

export const roboto = {
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
};

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', ...roboto.fallback].join(','),
  },
});

export default theme;
