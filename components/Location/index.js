'use client';

import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsIcon from '@mui/icons-material/Directions';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { projectData } from '@/data/projectData';

export default function Location() {
    const { location } = projectData;

    const handleOpenMap = () => {
        window.open(location.mapLink, '_blank');
    };

    return (
        <Box
            id="location"
            sx={{
                backgroundColor: '#F5F5F2', // Alternate background color
                py: { xs: 12, md: 20 },
                position: 'relative',
                overflow: 'hidden'
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
                        STRATEGIC POSITIONING
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
                        LOCATION EXPERIENCE
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontFamily: '"Inter", sans-serif',
                            color: '#C59D5F',
                            fontSize: '1.2rem',
                            fontWeight: 500,
                            letterSpacing: '0.05em',
                            mt: 1
                        }}
                    >
                        Malur, Kolar — Bengaluru Eastern Growth Corridor
                    </Typography>
                </Box>

                {/* Layout Grid: Map and Connectivity side-by-side */}
                <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: 'stretch' }}>

                    {/* Map Block */}
                    <Grid size={{ xs: 12, lg: 7 }}>
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
                                    height: { xs: '350px', sm: '450px', lg: '100%' },
                                    minHeight: { lg: '500px' },
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(15, 23, 42, 0.08)',
                                    boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
                                    backgroundColor: '#FFFFFF'
                                }}
                            >
                                {/* Embed Google Maps */}
                                <iframe
                                    title="10KPlots Malur Location Map"
                                    src={location.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Connectivity / Distance List */}
                    <Grid size={{ xs: 12, lg: 5 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
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
                                    mb: 2,
                                    lineHeight: 1.3
                                }}
                            >
                                Perfect Proximity
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: '"Inter", sans-serif',
                                    color: '#64748B',
                                    fontSize: '1.05rem',
                                    lineHeight: 1.8,
                                    mb: 5
                                }}
                            >
                                Positioned seamlessly close to major micro-markets. Benefit from direct arterial roads, upcoming high-speed transit rings, and rapid industrial-tech corridor integration.
                            </Typography>

                            {/* Distances Grid */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 5 }}>
                                {location.hubs.map((hub, idx) => (
                                    <Paper
                                        key={idx}
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            borderRadius: '4px',
                                            border: '1px solid #E7E5E4',
                                            backgroundColor: '#FFFFFF',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                            '&:hover': {
                                                borderColor: '#C59D5F',
                                                transform: 'translateX(6px)',
                                                boxShadow: '0 10px 20px -10px rgba(197, 157, 95, 0.15)'
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <LocationOnIcon sx={{ color: '#C59D5F', fontSize: '1.35rem' }} />
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontFamily: '"Poppins", sans-serif',
                                                    fontWeight: 500,
                                                    color: '#0F172A',
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                {hub.name}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <AccessTimeIcon sx={{ color: '#64748B', fontSize: '1.15rem' }} />
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontFamily: '"Inter", sans-serif',
                                                    fontWeight: 600,
                                                    color: '#64748B',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                {hub.distance}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                ))}
                            </Box>

                            {/* Directions Button */}
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<DirectionsIcon />}
                                onClick={handleOpenMap}
                                sx={{
                                    py: 2,
                                    px: 4,
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.15em',
                                    borderRadius: '4px',
                                    width: { xs: '100%', sm: 'auto' }
                                }}
                            >
                                Get Directions on Maps
                            </Button>

                        </motion.div>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}