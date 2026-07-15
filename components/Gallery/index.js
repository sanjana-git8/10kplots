'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Dialog, IconButton, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { projectData } from '@/data/projectData';

export default function Gallery() {
    const { gallery } = projectData;
    const [activeImageIndex, setActiveImageIndex] = useState(null);

    const handleOpenLightbox = (index) => {
        setActiveImageIndex(index);
    };

    const handleCloseLightbox = () => {
        setActiveImageIndex(null);
    };

    const handlePrevImage = (e) => {
        e.stopPropagation();
        setActiveImageIndex((prevIndex) =>
            prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = (e) => {
        e.stopPropagation();
        setActiveImageIndex((prevIndex) =>
            prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Box
            id="gallery"
            sx={{
                backgroundColor: '#F8F8F6',
                py: { xs: 12, md: 20 },
                position: 'relative'
            }}
        >
            <Container maxWidth="xl">

                {/* Section Header */}
                <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: 'center' }}>
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
                        VISUAL PORTFOLIO
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#0F172A',
                            fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
                            fontWeight: 600,
                            fontFamily: '"Poppins", sans-serif',
                            letterSpacing: '0.02em',
                            mb: 3
                        }}
                    >
                        ESTATE GALLERY
                    </Typography>
                    <Box
                        sx={{
                            width: '60px',
                            height: '2px',
                            backgroundColor: '#C59D5F',
                            mx: 'auto'
                        }}
                    />
                </Box>

                {/* Elegant Pseudo-Masonry Layout */}
                <Grid container spacing={3}>
                    {gallery.map((image, idx) => {
                        // Alternate heights to simulate a high-end structural masonry grid
                        const heightConfigs = [320, 480, 380, 450, 350, 420];
                        const itemHeight = heightConfigs[idx % heightConfigs.length];

                        return (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={image.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Box
                                        onClick={() => handleOpenLightbox(idx)}
                                        sx={{
                                            position: 'relative',
                                            height: `${itemHeight}px`,
                                            width: '100%',
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            backgroundColor: '#0F172A',
                                            cursor: 'pointer',
                                            boxShadow: '0 10px 30px -15px rgba(15, 23, 42, 0.1)',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                inset: 0,
                                                border: '1px solid #C59D5F',
                                                borderRadius: '8px',
                                                margin: '12px',
                                                opacity: 0,
                                                transform: 'scale(0.95)',
                                                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                                zIndex: 3
                                            },
                                            '&:hover': {
                                                '&::before': {
                                                    opacity: 1,
                                                    transform: 'scale(1)'
                                                },
                                                '& .gallery-img-bg': {
                                                    transform: 'scale(1.05)'
                                                },
                                                '& .gallery-img-overlay': {
                                                    opacity: 1
                                                }
                                            }
                                        }}
                                    >
                                        {/* Background Visual Container */}
                                        <Box
                                            className="gallery-img-bg"
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: `url(${image.url})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
                                            }}
                                        />

                                        {/* Minimal Interactive Overlay */}
                                        <Box
                                            className="gallery-img-overlay"
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.1) 70%)',
                                                opacity: 0,
                                                transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-end',
                                                p: 4,
                                                zIndex: 2
                                            }}
                                        >
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    color: '#FFFFFF',
                                                    fontFamily: '"Poppins", sans-serif',
                                                    fontSize: '1.25rem',
                                                    fontWeight: 500,
                                                    letterSpacing: '0.05em'
                                                }}
                                            >
                                                {image.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#C59D5F',
                                                    fontFamily: '"Inter", sans-serif',
                                                    fontSize: '0.75rem',
                                                    letterSpacing: '0.15em',
                                                    textTransform: 'uppercase',
                                                    mt: 0.5
                                                }}
                                            >
                                                Exquisite Land Parcel
                                            </Typography>
                                        </Box>
                                    </Box>
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>

            </Container>

            {/* Panoramic Architectural Lightbox System */}
            <Dialog
                fullScreen
                open={activeImageIndex !== null}
                onClose={handleCloseLightbox}
                PaperProps={{
                    sx: {
                        backgroundColor: 'rgba(15, 23, 42, 0.98)',
                        backgroundImage: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: 'none',
                        overflow: 'hidden'
                    }
                }}
            >
                {/* Top Control Bar */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 3,
                        borderBottom: '1px solid rgba(248, 250, 252, 0.05)',
                        zIndex: 10
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            color: '#FFFFFF',
                            letterSpacing: '0.1em'
                        }}
                    >
                        {activeImageIndex !== null ? gallery[activeImageIndex].title : ''}
                    </Typography>
                    <IconButton
                        onClick={handleCloseLightbox}
                        sx={{
                            color: '#C59D5F',
                            border: '1px solid rgba(197, 157, 95, 0.25)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.05)'
                            }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Viewport Action Surface */}
                <Box
                    sx={{
                        position: 'relative',
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: { xs: 2, md: 10 },
                        py: 2
                    }}
                >
                    {/* Navigation Controls */}
                    <IconButton
                        onClick={handlePrevImage}
                        sx={{
                            position: 'absolute',
                            left: { xs: 16, md: 32 },
                            color: '#FFFFFF',
                            border: '1px solid rgba(248, 250, 252, 0.1)',
                            backgroundColor: 'rgba(15, 23, 42, 0.5)',
                            backdropFilter: 'blur(10px)',
                            p: 2,
                            '&:hover': {
                                backgroundColor: 'rgba(197, 157, 95, 0.2)',
                                borderColor: '#C59D5F'
                            },
                            zIndex: 10
                        }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    <AnimatePresence mode="wait">
                        {activeImageIndex !== null && (
                            <motion.img
                                key={activeImageIndex}
                                src={gallery[activeImageIndex].url}
                                alt={gallery[activeImageIndex].title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '75vh',
                                    objectFit: 'contain',
                                    borderRadius: '4px',
                                    boxShadow: '0 30px 60px -20px rgba(0,0,0,0.8)'
                                }}
                            />
                        )}
                    </AnimatePresence>

                    <IconButton
                        onClick={handleNextImage}
                        sx={{
                            position: 'absolute',
                            right: { xs: 16, md: 32 },
                            color: '#FFFFFF',
                            border: '1px solid rgba(248, 250, 252, 0.1)',
                            backgroundColor: 'rgba(15, 23, 42, 0.5)',
                            backdropFilter: 'blur(10px)',
                            p: 2,
                            '&:hover': {
                                backgroundColor: 'rgba(197, 157, 95, 0.2)',
                                borderColor: '#C59D5F'
                            },
                            zIndex: 10
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>

                {/* Bottom Pagination Info */}
                <Box
                    sx={{
                        py: 3,
                        textAlign: 'center',
                        borderTop: '1px solid rgba(248, 250, 252, 0.05)',
                        zIndex: 10
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: '"Inter", sans-serif',
                            color: 'rgba(248, 250, 252, 0.4)',
                            fontSize: '0.85rem',
                            letterSpacing: '0.2em'
                        }}
                    >
                        {activeImageIndex !== null ? `${activeImageIndex + 1} / ${gallery.length}` : ''}
                    </Typography>
                </Box>
            </Dialog>
        </Box>
    );
}