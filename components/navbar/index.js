'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import site from '@/data/site';
import {
    AppBar,
    Toolbar,
    Box,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Project', id: 'project' },
    { label: 'Contact', id: 'contact' }
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            // Trigger glassmorphism state after scrolling 50px
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Track active section to highlight active nav link
            const scrollPosition = window.scrollY + 120;
            for (const item of navItems) {
                const el = document.getElementById(item.id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(item.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavClick = (id) => {
        setMobileOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Offset to clear sticky navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    background: '#000000', // Pure black
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    pt: scrolled ? 1.5 : 2.5,
                    pb: scrolled ? 1.5 : 2.5,
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        {/* Logo Unit - Left Section */}
                        <Box
                            onClick={() => handleNavClick('home')}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                cursor: 'pointer',
                                transition: 'opacity 0.3s ease',
                                '&:hover': { opacity: 0.9 },
                                flex: { xs: 'none', md: 1 },
                                justifyContent: 'flex-start'
                            }}
                        >
                            {/* Brand Logo Image */}
                            <Image 
                                src={site.logo} 
                                width={56} 
                                height={56} 
                                alt={site.logoAlt} 
                                style={{ objectFit: 'contain' }} 
                            />
                        </Box>

                        {/* Desktop Navigation Links - Centered Section */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, justifyContent: 'center' }}>
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <Box
                                        key={item.id}
                                        onClick={() => handleNavClick(item.id)}
                                        sx={{
                                            fontFamily: '"Inter", sans-serif',
                                            fontWeight: 500,
                                            fontSize: '0.85rem',
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            color: isActive ? '#C59D5F' : '#FFFFFF',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            pb: 0.5,
                                            transition: 'color 0.4s ease',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: isActive ? '100%' : '0%',
                                                height: '1px',
                                                backgroundColor: '#C59D5F',
                                                transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                                            },
                                            '&:hover': {
                                                color: '#B68A45',
                                                '&::after': {
                                                    width: '100%'
                                                }
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Box>
                                );
                            })}
                        </Box>

                        {/* Actions and Triggers - Right Section */}
                        <Box sx={{ display: 'flex', flex: { xs: 'none', md: 1 }, justifyContent: 'flex-end', alignItems: 'center' }}>
                            {/* Mobile Navigation Trigger */}
                            <IconButton
                                color="inherit"
                                aria-label="open navigation drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{
                                    display: { md: 'none' },
                                    color: '#FFFFFF',
                                    padding: 1,
                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                    borderRadius: '4px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                                }}
                            >
                                <MenuIcon />
                            </IconButton>

                            {/* Desktop Elegant Gold CTA button */}
                            <Button
                                variant="outlined"
                                onClick={() => handleNavClick('contact')}
                                sx={{
                                    display: { xs: 'none', md: 'inline-flex' },
                                    borderColor: '#C59D5F',
                                    color: '#C59D5F',
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.15em',
                                    fontFamily: '"Inter", sans-serif',
                                    textTransform: 'uppercase',
                                    fontWeight: 500,
                                    px: 3,
                                    py: 1,
                                    borderRadius: '4px',
                                    '&:hover': {
                                        borderColor: '#B68A45',
                                        color: '#FFFFFF',
                                        backgroundColor: '#B68A45'
                                    }
                                }}
                            >
                                Enquire Now
                            </Button>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Sidebar System */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                    sx: {
                        width: '280px',
                        backgroundColor: '#FFFFFF',
                        backgroundImage: 'none',
                        borderLeft: '1px solid #E7E5E4',
                        padding: '30px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }
                }}
            >
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 6 }}>
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{
                                color: '#C59D5F',
                                border: '1px solid #E7E5E4',
                                borderRadius: '50%'
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <ListItem key={item.id} disablePadding>
                                    <ListItemButton
                                        onClick={() => handleNavClick(item.id)}
                                        sx={{
                                            padding: '12px 16px',
                                            borderRadius: '4px',
                                            backgroundColor: isActive ? 'rgba(197, 157, 95, 0.08)' : 'transparent',
                                            borderLeft: isActive ? '3px solid #C59D5F' : '3px solid transparent',
                                            '&:hover': {
                                                backgroundColor: 'rgba(15, 23, 42, 0.03)'
                                            }
                                        }}
                                    >
                                        <ListItemText
                                            primary={item.label}
                                            primaryTypographyProps={{
                                                fontFamily: '"Poppins", sans-serif',
                                                fontWeight: 500,
                                                fontSize: '1rem',
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase',
                                                color: isActive ? '#C59D5F' : '#0F172A'
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>

                {/* Footer info within side menu */}
                <Box sx={{ textAlign: 'center', pb: 2 }}>
                    <span style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.7rem',
                        letterSpacing: '0.2em',
                        color: '#64748B',
                        textTransform: 'uppercase'
                    }}>
                        Invest in Land. Invest in Life.
                    </span>
                </Box>
            </Drawer>
        </>
    );
}