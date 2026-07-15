'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion as motionFramer } from 'framer-motion';
import { projectData } from '@/data/projectData';

export default function Story() {
    const { story } = projectData;

    return (
        <Box
            id="story"
            sx={{
                backgroundColor: '#F8F8F6',
                py: { xs: 12, md: 20 },
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: 'flex-start' }}>

                    {/* Left Column: Heading & Anchor */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <motionFramer.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    color: '#0F172A',
                                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                    lineHeight: 1.15,
                                    fontWeight: 600,
                                    fontFamily: '"Poppins", sans-serif',
                                    letterSpacing: '0.05em',
                                    position: 'relative',
                                    pb: 3,
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '60px',
                                        height: '2px',
                                        backgroundColor: '#C59D5F' // Architectural Gold Line
                                    }
                                }}
                            >
                                {story.title}
                            </Typography>
                        </motionFramer.div>
                    </Grid>

                    {/* Right Column: Premium Narrative Copy */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <motionFramer.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#64748B',
                                    fontSize: { xs: '1.15rem', sm: '1.25rem', md: '1.5rem' },
                                    fontWeight: 300,
                                    fontFamily: '"Inter", sans-serif',
                                    lineHeight: 1.85,
                                    maxWidth: '850px',
                                    mb: 4
                                }}
                            >
                                {story.paragraph}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#C59D5F',
                                    fontFamily: '"Poppins", sans-serif',
                                    fontWeight: 600,
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase'
                                }}
                            >
                                Est. Brand Values — Excellence. Trust. Heritage.
                            </Typography>
                        </motionFramer.div>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}