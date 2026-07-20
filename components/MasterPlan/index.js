'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Button, Dialog, IconButton, Zoom } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DownloadIcon from '@mui/icons-material/Download';
import { projectData } from '@/data/projectData';

export default function MasterPlan() {
    const { featuredProject } = projectData;
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);

    const handleZoomIn = (e) => {
        e.stopPropagation();
        setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
    };

    const handleZoomOut = (e) => {
        e.stopPropagation();
        setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
    };

    const handleResetZoom = () => {
        setZoomLevel(1);
    };

    const handleDownload = () => {
        alert('Preparing layout blueprint PDF for download...');
    };

    return (
        <Box
            id="master-plan"
            sx={{
                backgroundColor: '#F8F8F6', // Luxury Off White background
                color: '#0F172A',
                py: { xs: 12, md: 20 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative Grid Lines to match Architectural Theme */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.03,
                    backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    pointerEvents: 'none',
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>

                {/* Header Section */}
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography
                        variant="overline"
                        sx={{
                            fontFamily: '"Inter", sans-serif',
                            letterSpacing: '0.3em',
                            color: '#C59D5F',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            display: 'block',
                            mb: 1,
                        }}
                    >
                        PRECISION PLANNING
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#0F172A',
                            fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
                            fontWeight: 600,
                            fontFamily: '"Poppins", sans-serif',
                            letterSpacing: '0.02em',
                            mb: 3,
                        }}
                    >
                        THE MASTER PLAN
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: '"Inter", sans-serif',
                            color: '#64748B',
                            fontSize: '1.1rem',
                            maxWidth: '700px',
                            mx: 'auto',
                            lineHeight: 1.8,
                        }}
                    >
                        Explore our thoughtfully designed blueprint showcasing spacious layouts, wide internal service networks, integrated community spaces, and premium arterial access.
                    </Typography>
                </Box>

                {/* Master Plan Map Interaction Container */}
                <Box sx={{ maxWidth: '1000px', mx: 'auto', mb: 6 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: '8px',
                                border: '1px solid rgba(197, 157, 95, 0.25)',
                                overflow: 'hidden',
                                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                                aspectRatio: { xs: '4/3', md: '16/10' },
                                cursor: 'zoom-in',
                                boxShadow: '0 30px 60px -15px rgba(15, 23, 42, 0.12)',
                            }}
                            onClick={() => setIsFullscreen(true)}
                        >
                            {/* Layout Display Viewport */}
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: `url(${featuredProject.masterPlanImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    transform: `scale(${zoomLevel})`,
                                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                }}
                            />

                            {/* Hover Dark Overlay Hint */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundColor: 'rgba(15, 23, 42, 0.2)',
                                    opacity: 1,
                                    transition: 'opacity 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    '&:hover': {
                                        backgroundColor: 'rgba(15, 23, 42, 0.05)',
                                    },
                                }}
                            >
                                {/* Floating Controller Deck */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 24,
                                        right: 24,
                                        display: 'flex',
                                        gap: 1.5,
                                        backgroundColor: 'rgba(15, 23, 42, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(197, 157, 95, 0.3)',
                                        borderRadius: '4px',
                                        p: 1,
                                        zIndex: 10,
                                    }}
                                    onClick={(e) => e.stopPropagation()} // Stop triggering fullscreen parent
                                >
                                    <IconButton onClick={handleZoomIn} size="small" sx={{ color: '#FFFFFF' }}>
                                        <ZoomInIcon />
                                    </IconButton>
                                    <IconButton onClick={handleZoomOut} size="small" sx={{ color: '#FFFFFF' }}>
                                        <ZoomOutIcon />
                                    </IconButton>
                                    <IconButton onClick={() => setIsFullscreen(true)} size="small" sx={{ color: '#C59D5F' }}>
                                        <FullscreenIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>
                </Box>

                {/* Layout Control Action Trigger */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DownloadIcon />}
                        onClick={handleDownload}
                        sx={{
                            py: 2,
                            px: 5,
                            fontSize: '0.85rem',
                            color: '#FFFFFF',
                            borderRadius: '4px',
                        }}
                    >
                        Download Layout Plan
                    </Button>
                </Box>

            </Container>

            {/* Fullscreen Interactive Lightbox System */}
            <Dialog
                fullScreen
                open={isFullscreen}
                onClose={() => {
                    setIsFullscreen(false);
                    handleResetZoom();
                }}
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 500 }}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: '#0F172A',
                            backgroundImage: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                        }
                    }
                }}
            >
                {/* Fullscreen Action Toolbar */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 3,
                        borderBottom: '1px solid rgba(197, 157, 95, 0.2)',
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: '1.25rem',
                            fontWeight: 500,
                            color: '#FFFFFF',
                            letterSpacing: '0.1em',
                        }}
                    >
                        SNYCON UNITED SERENITY - MASTER PLAN
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(197, 157, 95, 0.3)',
                                borderRadius: '4px',
                                p: 0.5,
                            }}
                        >
                            <IconButton onClick={handleZoomIn} sx={{ color: '#FFFFFF' }}>
                                <ZoomInIcon />
                            </IconButton>
                            <IconButton onClick={handleZoomOut} sx={{ color: '#FFFFFF' }}>
                                <ZoomOutIcon />
                            </IconButton>
                        </Box>
                        <IconButton
                            onClick={() => {
                                setIsFullscreen(false);
                                handleResetZoom();
                            }}
                            sx={{
                                color: '#C59D5F',
                                border: '1px solid rgba(197, 157, 95, 0.3)',
                                borderRadius: '50%',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>

                {/* Viewport for Fullscreen Zoom */}
                <Box
                    sx={{
                        flexGrow: 1,
                        overflow: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                        cursor: 'grab',
                        '&:active': { cursor: 'grabbing' },
                    }}
                >
                    <Box
                        component="img"
                        src={featuredProject.masterPlanImage}
                        alt="Master layout blueprint fullscreen zoom viewport"
                        sx={{
                            maxWidth: '100%',
                            maxHeight: '85vh',
                            objectFit: 'contain',
                            transform: `scale(${zoomLevel})`,
                            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            transformOrigin: 'center center',
                        }}
                    />
                </Box>
            </Dialog>
        </Box>
    );
}