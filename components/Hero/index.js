'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Button, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { projectData } from '@/data/projectData';

export default function Hero() {
    const { hero } = projectData;

    const handleExploreScroll = () => {
        const target = document.getElementById('project');
        if (target) {
            const offset = 80; // Offset for sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const targetRect = target.getBoundingClientRect().top;
            const targetPosition = targetRect - bodyRect;
            const offsetPosition = targetPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box
            id="home"
            sx={{
                position: 'relative',
                minHeight: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                pt: { xs: 12, md: 16 },
                pb: { xs: 8, md: 12 }
            }}
        >
            {/* Main Container Workspace */}
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center', mb: 6, mt: { xs: 2, md: 4 } }}>
                    
                    {/* Left Column: Premium Brand Text */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box>
                            {/* Animated Accent Line & Tagline */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '40px' }}
                                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ height: '1px', backgroundColor: '#C59D5F' }}
                                />
                                <Typography
                                    variant="overline"
                                    sx={{
                                        fontFamily: '"Inter", sans-serif',
                                        letterSpacing: '0.4em',
                                        color: '#C59D5F',
                                        fontWeight: 600,
                                        fontSize: { xs: '0.75rem', sm: '0.85rem' }
                                    }}
                                >
                                    EXCLUSIVELY PLOTTED LANDS
                                </Typography>
                            </Box>

                            {/* Hero Main Heading */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        color: '#0F172A',
                                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                                        lineHeight: 1.1,
                                        fontWeight: 700,
                                        mb: 3,
                                        fontFamily: '"Poppins", sans-serif'
                                    }}
                                >
                                    {hero.title.split('. ').map((part, i) => (
                                        <span key={i} style={{ display: 'block' }}>
                                            {part}{i === 0 ? '.' : ''}
                                        </span>
                                    ))}
                                </Typography>
                            </motion.div>

                            {/* Subtitle Presentation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#64748B',
                                        fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                                        fontWeight: 300,
                                        mb: 6,
                                        fontFamily: '"Inter", sans-serif',
                                        lineHeight: 1.8
                                    }}
                                >
                                    {hero.subheading}
                                </Typography>
                            </motion.div>

                            {/* Luxury CTA Action Trigger */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.6 }}
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleExploreScroll}
                                    endIcon={<ArrowDownwardIcon />}
                                    sx={{
                                        padding: '18px 48px',
                                        fontSize: '0.9rem',
                                        letterSpacing: '0.2em',
                                        borderRadius: '4px',
                                        color: '#FFFFFF'
                                    }}
                                >
                                    Explore Project
                                </Button>
                            </motion.div>
                        </Box>
                    </Grid>

                    {/* Right Column: Hero Banner Image Showcase */}
                    <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            style={{ width: '100%' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    aspectRatio: { xs: '16/10', md: '4/3' },
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(197, 157, 95, 0.25)',
                                    boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6)'
                                }}
                            >
                                <Image
                                    src={hero.bgImage}
                                    alt="Cinematic entryway to premium plotted development"
                                    fill
                                    quality={90}
                                    priority
                                    style={{
                                        objectFit: "cover"
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Grid>

                </Grid>



                {/* Architectural Statistics Dashboard */}
                <Box sx={{ borderTop: '1px solid #E7E5E4', pt: 6 }}>
                    <Grid container spacing={4}>
                        {hero.stats.map((stat, idx) => (
                            <Grid size={{ xs: 6, md: 3 }} key={idx}>
                                <Box>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            color: '#C59D5F',
                                            fontWeight: 600,
                                            fontSize: { xs: '1.35rem', sm: '1.6rem', md: '2rem' },
                                            lineHeight: 1.2,
                                            fontFamily: '"Poppins", sans-serif',
                                            mb: 1,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#64748B',
                                            fontSize: '0.75rem',
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            fontFamily: '"Inter", sans-serif'
                                        }}
                                    >
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Container>
        </Box>
    );
}