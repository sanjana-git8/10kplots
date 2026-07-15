'use client';

import React, { useState, useEffect } from 'react';
import { Box, Fab, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import site from '@/data/site';

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Button appears dynamically after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleWhatsAppRedirect = () => {
        const encodedMessage = encodeURIComponent('Hello, I am looking for premium plots. Please send me further details.');
        window.open(`${site.whatsappUrl}?text=${encodedMessage}`, '_blank');
    };

    return (
        <Zoom in={isVisible} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    zIndex: 1000
                }}
            >
                <Fab
                    onClick={handleWhatsAppRedirect}
                    color="success"
                    aria-label="chat on whatsapp"
                    sx={{
                        backgroundColor: '#25D366', // WhatsApp Green
                        color: '#FFFFFF',
                        width: '60px',
                        height: '60px',
                        boxShadow: '0 10px 25px -5px rgba(37, 211, 102, 0.4)',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        '&:hover': {
                            backgroundColor: '#20BA5A',
                            transform: 'scale(1.1) rotate(8deg)',
                            boxShadow: '0 15px 30px -5px rgba(37, 211, 102, 0.5)'
                        }
                    }}
                >
                    <WhatsAppIcon sx={{ fontSize: '2rem' }} />
                </Fab>
            </Box>
        </Zoom>
    );
}