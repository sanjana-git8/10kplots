'use client';

import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { projectData } from '@/data/projectData';
import site from '@/data/site';
import Image from 'next/image';

const footerNavItems = [
    { label: 'Home', id: 'home' },
    { label: 'Upcoming', id: 'upcoming-projects', isRoute: true },
    { label: 'Partners', id: 'partners', isRoute: true },
    { label: 'Refer & Earn', id: 'referrals', isRoute: true },
    { label: 'Contact', id: 'contact' }
];

export default function Footer() {
    const { reraNumber } = projectData;
    const pathname = usePathname();
    const router = useRouter();

    const handleFooterNavClick = (item) => {
        if (item.isRoute) {
            router.push(`/${item.id}`);
        } else if (pathname !== '/') {
            router.push(`/#${item.id}`);
        } else {
            const element = document.getElementById(item.id);
            if (element) {
                const offset = 80; // Clear sticky header
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#000000', // Pure black
                color: '#FFFFFF', // White text color for contrast
                pt: { xs: 8, md: 12 },
                pb: 6,
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
                zIndex: 10
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={6} sx={{ justifyContent: 'space-between' }}>

                    {/* Brand Presentation Block */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                {/* Brand Logo Image */}
                                <Image 
                                    src={site.logo} 
                                    width={48} 
                                    height={48} 
                                    alt={site.logoAlt} 
                                    title="10KPlots - Secure Your Footprint"
                                    style={{ objectFit: 'contain' }} 
                                />
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontFamily: '"Poppins", sans-serif',
                                        fontWeight: 700,
                                        fontSize: '1.25rem',
                                        letterSpacing: '0.1em',
                                        color: '#FFFFFF',
                                        lineHeight: 1
                                    }}
                                >
                                    {site.company.toUpperCase()}
                                </Typography>
                            </Box>

                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: '"Inter", sans-serif',
                                    color: '#94A3B8',
                                    maxWidth: '380px',
                                    lineHeight: 1.7,
                                    fontSize: '0.9rem',
                                    mt: 1
                                }}
                            >
                                {site.tagline} Premium plotted developments engineered for smart wealth preservation and high-end living parameters.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Quick Navigation Links Block */}
                    <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 3, sm: 4 }, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                            {footerNavItems.map((item) => (
                                <Typography
                                    key={item.id}
                                    onClick={() => handleFooterNavClick(item)}
                                    sx={{
                                        fontFamily: '"Inter", sans-serif',
                                        fontWeight: 500,
                                        fontSize: '0.85rem',
                                        letterSpacing: '0.15em',
                                        textTransform: 'uppercase',
                                        color: '#94A3B8',
                                        cursor: 'pointer',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: '#C59D5F'
                                        }
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                </Grid>

                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 6 }} />

                {/* Legal Disclaimer & Copyright info */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 1
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            fontFamily: '"Inter", sans-serif',
                            color: 'rgba(248, 250, 252, 0.4)',
                            fontSize: '0.72rem',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            textAlign: 'center'
                        }}
                    >
                        © {new Date().getFullYear()} {site.company.toUpperCase()} — ALL RIGHTS RESERVED.
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
}