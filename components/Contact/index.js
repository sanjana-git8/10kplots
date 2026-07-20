'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import site from '@/data/site';

export default function Contact() {

    const handlePhoneCall = () => {
        window.open(`tel:${site.phone}`, '_self');
    };

    const handleWhatsAppChat = () => {
        const encodedMessage = encodeURIComponent('Hello 10KPlots, I would like to coordinate a meeting at your office for a Snycon United Serenity site visit.');
        window.open(`${site.whatsappUrl}?text=${encodedMessage}`, '_blank');
    };

    return (
        <Box
            id="contact"
            sx={{
                backgroundColor: '#F5F5F2', // Alternate light background
                py: { xs: 12, md: 20 },
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Structural Minimal Graphic Accents */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(197,157,95,0.04) 0%, rgba(0,0,0,0) 70%)',
                    pointerEvents: 'none',
                    zIndex: 1
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                <Grid container spacing={{ xs: 6, lg: 10 }} sx={{ alignItems: 'center' }}>

                    {/* Left Column: Massive Luxury Headline */}
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
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
                                SECURE YOUR FOOTPRINT
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: '#0F172A',
                                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.25rem' },
                                    fontWeight: 600,
                                    fontFamily: '"Poppins", sans-serif',
                                    lineHeight: 1.15,
                                    letterSpacing: '0.01em',
                                    mb: 4
                                }}
                            >
                                Let's Help You Find The Perfect Plot.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: '"Inter", sans-serif',
                                    color: '#64748B',
                                    fontSize: '1.15rem',
                                    lineHeight: 1.8,
                                    maxWidth: '550px'
                                }}
                            >
                                Connect directly with our private client advisory group. We offer guided personal site walkthroughs, comprehensive clearance files, and strategic investment analysis.
                            </Typography>
                        </motion.div>
                    </Grid>

                    {/* Right Column: Direct High-Value Action Trays */}
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: '500px', ml: { lg: 'auto' } }}>

                                {/* Voice Call Tray */}
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        borderRadius: '8px',
                                        border: '1px solid #E7E5E4',
                                        backgroundColor: '#FFFFFF',
                                        backdropFilter: 'blur(10px)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 3,
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            borderColor: '#C59D5F',
                                            backgroundColor: '#FFFFFF'
                                        }
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontFamily: '"Poppins", sans-serif',
                                                fontSize: '1.25rem',
                                                color: '#0F172A',
                                                fontWeight: 500,
                                                mb: 1
                                            }}
                                        >
                                            Corporate Advisory Office
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ fontFamily: '"Inter", sans-serif', color: '#64748B', fontSize: '0.9rem' }}
                                        >
                                            Contact our advisory team to discuss flexible purchase structures or to coordinate your private site walkthrough.
                                        </Typography>
                                    </Box>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        startIcon={<PhoneInTalkIcon />}
                                        onClick={handlePhoneCall}
                                        sx={{
                                            py: 2,
                                            fontSize: '0.85rem',
                                            letterSpacing: '0.2em',
                                            borderColor: '#C59D5F',
                                            color: '#C59D5F',
                                            borderRadius: '4px',
                                            '&:hover': {
                                                backgroundColor: '#B68A45',
                                                color: '#FFFFFF',
                                                borderColor: '#B68A45'
                                            }
                                        }}
                                    >
                                        {site.phone}
                                    </Button>
                                </Paper>

                                {/* Instant WhatsApp Tray */}
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        borderRadius: '8px',
                                        border: '1px solid #E7E5E4',
                                        backgroundColor: '#FFFFFF',
                                        backdropFilter: 'blur(10px)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 3,
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            borderColor: '#25D366',
                                            backgroundColor: '#FFFFFF'
                                        }
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontFamily: '"Poppins", sans-serif',
                                                fontSize: '1.25rem',
                                                color: '#0F172A',
                                                fontWeight: 500,
                                                mb: 1
                                            }}
                                        >
                                            Instant Digital Enquiry
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ fontFamily: '"Inter", sans-serif', color: '#64748B', fontSize: '0.9rem' }}
                                        >
                                            Receive verified legal documents, master plans, and layout maps instantly via WhatsApp.
                                        </Typography>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        startIcon={<WhatsAppIcon />}
                                        onClick={handleWhatsAppChat}
                                        sx={{
                                            py: 2,
                                            fontSize: '0.85rem',
                                            letterSpacing: '0.2em',
                                            backgroundColor: '#25D366',
                                            border: '1px solid #25D366',
                                            color: '#FFFFFF',
                                            borderRadius: '4px',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                color: '#25D366',
                                                borderColor: '#25D366'
                                            }
                                        }}
                                    >
                                        Click to Enquire
                                    </Button>
                                </Paper>

                            </Box>
                        </motion.div>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}