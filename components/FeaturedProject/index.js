'use client';

import React from 'react';
import { Box, Container, Grid, Typography, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import MapIcon from '@mui/icons-material/Map';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { projectData } from '@/data/projectData';

export default function FeaturedProject() {
    const { featuredProject, contact } = projectData;

    const handleMasterPlanScroll = () => {
        const target = document.getElementById('master-plan');
        if (target) {
            const offset = 80;
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

    const handleDownloadBrochure = () => {
        // Elegant toast or fallback logic for brochure download
        alert('Brochure download will begin shortly.');
    };

    const handleWhatsAppRedirect = () => {
        const encodedMessage = encodeURIComponent(featuredProject.whatsappMessage);
        const url = `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    return (
        <Box
            id="project"
            sx={{
                backgroundColor: '#F5F5F2', // Alternate background
                py: { xs: 12, md: 20 },
                position: 'relative'
            }}
        >
            <Container maxWidth="xl">

                {/* Section Heading Panel */}
                <Box sx={{ mb: { xs: 8, md: 12 } }}>
                    <Typography
                        variant="overline"
                        sx={{
                            fontFamily: '"Inter", sans-serif',
                            letterSpacing: '0.3em',
                            color: '#C59D5F',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            display: 'block',
                            mb: 1
                        }}
                    >
                        FEATURED PLOTTED DEVELOPMENT
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#0F172A',
                            fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
                            fontWeight: 600,
                            fontFamily: '"Poppins", sans-serif',
                            letterSpacing: '0.02em',
                            textTransform: 'uppercase'
                        }}
                    >
                        {featuredProject.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontFamily: '"Inter", sans-serif',
                            color: '#C59D5F',
                            fontSize: '1.2rem',
                            fontWeight: 500,
                            letterSpacing: '0.1em',
                            mt: 1
                        }}
                    >
                        📍 {featuredProject.location}
                    </Typography>
                </Box>

                {/* Cinematic Two-Column Work Surface */}
                <Grid container spacing={{ xs: 6, lg: 10 }} sx={{ alignItems: 'stretch' }}>

                    {/* Column 1: Image Showcase */}
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            style={{ height: '100%' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: { xs: '350px', sm: '450px', md: '550px', lg: '100%' },
                                    minHeight: { lg: '600px' },
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.15)',
                                    backgroundColor: '#0F172A'
                                }}
                            >
                                {/* Simulated Custom Aspect-Ratio Next-Image Container */}
                                <Box
                                    component="div"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(${featuredProject.coverImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center 27%',
                                        transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                                        '&:hover': {
                                            transform: 'scale(1.05)'
                                        }
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Column 2: Detailed Specs and Conversion Triggers */}
                    <Grid size={{ xs: 12, lg: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: '"Poppins", sans-serif',
                                    fontSize: { xs: '1.5rem', md: '1.85rem' },
                                    color: '#0F172A',
                                    fontWeight: 600,
                                    mb: 3,
                                    lineHeight: 1.3
                                }}
                            >
                                An Architectural Foundation for Generations
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: '"Inter", sans-serif',
                                    color: '#64748B',
                                    fontSize: '1.05rem',
                                    lineHeight: 1.8,
                                    mb: 4
                                }}
                            >
                                {featuredProject.description}
                            </Typography>

                            {/* Specs & Regulatory Checklist */}
                            <Box sx={{ mb: 6, display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Box>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontFamily: '"Poppins", sans-serif',
                                            fontWeight: 700,
                                            color: '#C59D5F',
                                            fontSize: '0.75rem',
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            display: 'block',
                                            mb: 0.5
                                        }}
                                    >
                                        RERA Registration Number
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ fontFamily: '"Inter", sans-serif', color: '#0F172A', fontWeight: 600, fontSize: '0.95rem' }}
                                    >
                                        {projectData.reraNumber}
                                    </Typography>
                                </Box>

                                <Divider sx={{ borderColor: '#D6D3D1' }} />

                                <Box>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontFamily: '"Poppins", sans-serif',
                                            fontWeight: 700,
                                            color: '#C59D5F',
                                            fontSize: '0.75rem',
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            display: 'block',
                                            mb: 0.5
                                        }}
                                    >
                                        Clear Approvals
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ fontFamily: '"Inter", sans-serif', color: '#64748B', fontSize: '0.95rem' }}
                                    >
                                        {featuredProject.approvals}
                                    </Typography>
                                </Box>

                                <Divider sx={{ borderColor: '#D6D3D1' }} />

                                <Box>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontFamily: '"Poppins", sans-serif',
                                            fontWeight: 700,
                                            color: '#C59D5F',
                                            fontSize: '0.75rem',
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            display: 'block',
                                            mb: 0.5
                                        }}
                                    >
                                        Exclusivity Statement
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ fontFamily: '"Inter", sans-serif', color: '#64748B', fontSize: '0.95rem', fontStyle: 'italic' }}
                                    >
                                        {featuredProject.pricing}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Strategic CTA Conversion Cluster */}
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        startIcon={<MapIcon />}
                                        onClick={handleMasterPlanScroll}
                                        sx={{
                                            py: 2,
                                            letterSpacing: '0.15em',
                                            fontSize: '0.8rem',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        View Master Plan
                                    </Button>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        color="primary"
                                        startIcon={<PictureAsPdfIcon />}
                                        onClick={handleDownloadBrochure}
                                        sx={{
                                            py: 2,
                                            letterSpacing: '0.15em',
                                            fontSize: '0.8rem',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        Download Brochure
                                    </Button>
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        startIcon={<WhatsAppIcon />}
                                        onClick={handleWhatsAppRedirect}
                                        sx={{
                                            py: 2,
                                            letterSpacing: '0.15em',
                                            fontSize: '0.8rem',
                                            borderRadius: '4px',
                                            backgroundColor: '#25D366', // Luxury WhatsApp green
                                            border: '1px solid #25D366',
                                            color: '#FFFFFF',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                color: '#25D366',
                                                borderColor: '#25D366'
                                            }
                                        }}
                                    >
                                        Open WhatsApp Inquiry
                                    </Button>
                                </Grid>
                            </Grid>

                        </motion.div>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}