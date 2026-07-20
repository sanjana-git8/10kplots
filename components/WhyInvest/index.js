'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { projectData } from '@/data/projectData';

export default function WhyInvest() {
    const { whyInvest, contact } = projectData;

    const handleWhatsAppRedirect = () => {
        const message = "Hello, I am interested in reserving a plot at Snycon United Serenity. Please share available premium plots.";
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    const handleEnquireScroll = () => {
        const target = document.getElementById('contact');
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

    return (
        <Box
            id="why-invest"
            sx={{
                backgroundColor: '#F8F8F6', // Luxury Off White background
                py: { xs: 12, md: 16 },
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Decorative Accents */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(197, 157, 95, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
                    zIndex: 0
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(15, 23, 42, 0.03) 0%, rgba(255, 255, 255, 0) 70%)',
                    zIndex: 0
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                
                {/* Heading Panel */}
                <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
                    <Typography
                        variant="overline"
                        sx={{
                            fontFamily: '"Inter", sans-serif',
                            letterSpacing: '0.3em',
                            color: '#C59D5F',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            display: 'block',
                            mb: 1.5
                        }}
                    >
                        INVESTMENT OPPORTUNITY
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#0F172A',
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.25rem' },
                            fontWeight: 600,
                            fontFamily: '"Poppins", sans-serif',
                            lineHeight: 1.2,
                            mb: 3,
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        {whyInvest.title}
                    </Typography>
                    <Box
                        sx={{
                            width: '80px',
                            height: '3px',
                            backgroundColor: '#C59D5F',
                            mx: 'auto',
                            borderRadius: '2px'
                        }}
                    />
                </Box>

                {/* Reasons Grid */}
                <Grid container spacing={4} sx={{ mb: 10 }}>
                    {whyInvest.reasons.map((reason, index) => {
                        return (
                            <Grid
                                key={reason.id}
                                size={{ 
                                    xs: 12, 
                                    md: 6, 
                                    lg: 4 
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ height: '100%' }}
                                >
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            p: { xs: 4, sm: 5 },
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #EAEAE6',
                                            borderRadius: '12px',
                                            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.02)',
                                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                            '&:hover': {
                                                transform: 'translateY(-6px)',
                                                borderColor: '#C59D5F',
                                                boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.08)',
                                                '& .number-box': {
                                                    color: '#C59D5F',
                                                    transform: 'scale(1.1)'
                                                }
                                            }
                                        }}
                                    >
                                        <Box>
                                            {/* Top Row: Number & Badge */}
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                                <Typography
                                                    className="number-box"
                                                    sx={{
                                                        fontFamily: '"Poppins", sans-serif',
                                                        fontWeight: 800,
                                                        fontSize: '2rem',
                                                        color: 'rgba(197, 157, 95, 0.25)',
                                                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                                        lineHeight: 1
                                                    }}
                                                >
                                                    {reason.number}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        fontFamily: '"Poppins", sans-serif',
                                                        fontWeight: 700,
                                                        color: '#C59D5F',
                                                        backgroundColor: 'rgba(197, 157, 95, 0.05)',
                                                        px: 2,
                                                        py: 0.5,
                                                        borderRadius: '30px',
                                                        fontSize: '0.7rem',
                                                        letterSpacing: '0.08em',
                                                        textTransform: 'uppercase',
                                                        border: '1px solid rgba(197, 157, 95, 0.15)'
                                                    }}
                                                >
                                                    {reason.badge}
                                                </Typography>
                                            </Box>

                                            {/* Reason Title */}
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    fontSize: { xs: '1.25rem', sm: '1.4rem' },
                                                    fontWeight: 600,
                                                    fontFamily: '"Poppins", sans-serif',
                                                    color: '#0F172A',
                                                    mb: 2,
                                                    lineHeight: 1.3
                                                }}
                                            >
                                                {reason.title}
                                            </Typography>

                                            {/* Reason Description */}
                                            {reason.description && (
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: '#64748B',
                                                        fontSize: '0.95rem',
                                                        lineHeight: 1.7,
                                                        mb: reason.bullets ? 2.5 : 0
                                                    }}
                                                >
                                                    {reason.description}
                                                </Typography>
                                            )}

                                            {/* Bullets if any */}
                                            {reason.bullets && (
                                                <Box sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                                    {reason.bullets.map((bullet, bIdx) => (
                                                        <Box key={bIdx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                                                            <CheckCircleOutlinedIcon sx={{ color: '#C59D5F', fontSize: '1.1rem', mt: '3px', flexShrink: 0 }} />
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    fontFamily: '"Inter", sans-serif',
                                                                    color: '#475569',
                                                                    fontSize: '0.9rem',
                                                                    lineHeight: 1.55
                                                                }}
                                                            >
                                                                {bullet}
                                                            </Typography>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            )}
                                        </Box>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>

                {/* Urgency & Callout Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#0F172A',
                            borderRadius: '16px',
                            p: { xs: 4, md: 6 },
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(15, 23, 42, 0.3)',
                            border: '1px solid rgba(197, 157, 95, 0.2)'
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '-50%',
                                right: '-30%',
                                width: '350px',
                                height: '350px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(197, 157, 95, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                                zIndex: 0
                            }}
                        />

                        <Grid container spacing={4} sx={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
                            
                            <Grid size={{ xs: 12, lg: 8 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            fontSize: '2rem',
                                            animation: 'pulse 2s infinite ease-in-out',
                                            '@keyframes pulse': {
                                                '0%, 100%': { transform: 'scale(1)' },
                                                '50%': { transform: 'scale(1.15)' }
                                            }
                                        }}
                                    >
                                        {whyInvest.urgency.icon}
                                    </Box>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontFamily: '"Poppins", sans-serif',
                                            color: '#C59D5F',
                                            fontWeight: 700,
                                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                                            letterSpacing: '0.1em'
                                        }}
                                    >
                                        {whyInvest.urgency.title}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: '"Inter", sans-serif',
                                        color: '#E2E8F0',
                                        fontSize: { xs: '1.05rem', md: '1.2rem' },
                                        lineHeight: 1.6,
                                        fontWeight: 300,
                                        maxWidth: '750px'
                                    }}
                                >
                                    {whyInvest.urgency.text}
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12, lg: 4 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<WhatsAppIcon />}
                                        onClick={handleWhatsAppRedirect}
                                        sx={{
                                            py: 2,
                                            backgroundColor: '#25D366',
                                            borderColor: '#25D366',
                                            color: '#FFFFFF',
                                            fontFamily: '"Inter", sans-serif',
                                            fontWeight: 600,
                                            fontSize: '0.85rem',
                                            letterSpacing: '0.12em',
                                            borderRadius: '6px',
                                            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)',
                                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                borderColor: '#25D366',
                                                color: '#25D366',
                                                boxShadow: 'none'
                                            }
                                        }}
                                    >
                                        Reserve Plot via WhatsApp
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        endIcon={<ArrowForwardIcon />}
                                        onClick={handleEnquireScroll}
                                        sx={{
                                            py: 2,
                                            borderColor: '#C59D5F',
                                            color: '#C59D5F',
                                            fontFamily: '"Inter", sans-serif',
                                            fontWeight: 600,
                                            fontSize: '0.85rem',
                                            letterSpacing: '0.12em',
                                            borderRadius: '6px',
                                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                            '&:hover': {
                                                backgroundColor: '#C59D5F',
                                                color: '#0F172A',
                                                borderColor: '#C59D5F'
                                            }
                                        }}
                                    >
                                        Request Callback
                                    </Button>
                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </motion.div>

            </Container>
        </Box>
    );
}
