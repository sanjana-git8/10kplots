'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0F172A', // Deep Navy
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#C59D5F', // Gold Accent
            contrastText: '#FFFFFF',
        },
        blue: {
            main: '#2563EB', // Royal Blue
        },
        whatsapp: {
            main: '#25D366', // WhatsApp Green
        },
        background: {
            default: '#F8F8F6', // Luxury Off White
            paper: '#FFFFFF', // Pure White
            navy: '#0F172A',
        },
        text: {
            primary: '#0F172A', // Deep Navy for primary readable text
            secondary: '#64748B', // Luxury secondary text
            gold: '#C59D5F',
            white: '#FFFFFF',
        },
        divider: '#D6D3D1',
    },
    typography: {
        fontFamily: '"Inter", "Poppins", sans-serif',
        h1: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
            letterSpacing: '-0.01em',
        },
        body1: {
            fontFamily: '"Inter", sans-serif',
            lineHeight: 1.8,
            letterSpacing: '0.01em',
        },
        body2: {
            fontFamily: '"Inter", sans-serif',
            lineHeight: 1.7,
            letterSpacing: '0.01em',
        },
        button: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
        },
    },
    shape: {
        borderRadius: 16, // Elegant, highly modern rounded corners
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '10px 24px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    boxShadow: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                },
                containedPrimary: {
                    backgroundColor: '#0F172A',
                    color: '#FFFFFF',
                    border: '1px solid #0F172A',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#0F172A',
                        borderColor: '#0F172A',
                    },
                },
                containedSecondary: {
                    backgroundColor: '#C59D5F',
                    color: '#FFFFFF',
                    border: '1px solid #C59D5F',
                    '&:hover': {
                        backgroundColor: '#B68A45',
                        color: '#FFFFFF',
                        borderColor: '#B68A45',
                    },
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#F8F8F6',
                    color: '#0F172A',
                    overflowX: 'hidden',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                },
            },
        },
    },
});

export default theme;