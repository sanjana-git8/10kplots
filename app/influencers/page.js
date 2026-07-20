'use client';

import React, { useState } from 'react';
import { 
    Box, 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    Button, 
    Paper, 
    Divider,
    Snackbar,
    Alert
} from '@mui/material';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function InfluencerHubPage() {
    const [toastOpen, setToastOpen] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const [selectedMyth, setSelectedMyth] = useState(0);

    const reels = [
        { title: "RERA Protection Simply Explained", duration: "0:30", category: "Reels & Shorts", hook: "Did you know builders face jail time for delaying projects now? Here's how RERA protects your money." },
        { title: "Land Banking vs. Gold in 2026", duration: "0:45", category: "Investment Tips", hook: "Gold grew 12% this year, but strategically converting plot land in growth corridors grew over 35%. Let's look at the numbers." },
        { title: "Walkthrough: United Serenity Gate", duration: "0:50", category: "Property Highlights", hook: "Checking out the grand entryway, perimeter walls, and internal cement roads of this premium gated community." },
        { title: "Is Malur the next Hosur Road?", duration: "1:00", category: "Area Spotlight", hook: "Analyzing industrial expansions, EV parks, and double track railways linking Malur to IT Hubs." }
    ];

    const myths = [
        {
            myth: "Buying plots is highly risky because of manual land forgery.",
            fact: "Modern plotting layouts registered with B-Khata or A-Khata on Kaveri 2.0 digital portals are legally verified by banks, securing them against ownership disputes."
        },
        {
            myth: "Pre-launch layouts are completely illegal and unauthorized.",
            fact: "Developers legally register upcoming plans under RERA first. Once registered, booking funds are kept in secure escrow accounts under banking audits."
        },
        {
            myth: "Plot land does not yield monthly rental cash flow.",
            fact: "Plots positioned near industrial corridors or logistics parks can be leased to warehousing, EV charging points, or modular logistics shelters immediately."
        }
    ];

    const handleCopyScript = (scriptText) => {
        navigator.clipboard.writeText(scriptText);
        setToastMsg("Script template copied to clipboard!");
        setToastOpen(true);
    };

    const handleShareMock = (platform) => {
        setToastMsg(`Opening draft template on ${platform}...`);
        setToastOpen(true);
    };

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F8F8F6' }}>
            <Navbar />

            <Box component="main" sx={{ flexGrow: 1, pt: { xs: 12, md: 16 } }}>

                {/* Hero Header */}
                <Box 
                    sx={{ 
                        backgroundColor: '#0F172A', 
                        color: '#FFFFFF',
                        py: { xs: 10, md: 12 },
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 90% 90%, rgba(197, 157, 95, 0.12) 0%, transparent 60%)', zIndex: 1 }} />
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                            <Box sx={{ width: '40px', height: '1px', backgroundColor: '#C59D5F' }} />
                            <Typography variant="overline" sx={{ fontFamily: '"Inter", sans-serif', letterSpacing: '0.4em', color: '#C59D5F', fontWeight: 600 }}>
                                INFLUENCER MEDIA KIT
                            </Typography>
                        </Box>
                        <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' }, fontWeight: 700, mb: 3, fontFamily: '"Poppins", sans-serif' }}>
                            Content for Creators
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#94A3B8', fontSize: '1.25rem', fontWeight: 300, maxWidth: '780px' }}>
                            Are you a real estate reviewer, financial influencer, or content creator? Access pre-written video scripts, hooks, property facts, and high-quality b-roll material instantly.
                        </Typography>
                    </Container>
                </Box>

                {/* Video Scripts Grid */}
                <Container maxWidth="xl" sx={{ py: { xs: 10, md: 14 } }}>
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h2" sx={{ color: '#0F172A', fontSize: { xs: '1.8rem', sm: '2.2rem' }, fontWeight: 600, fontFamily: '"Poppins", sans-serif', mb: 1 }}>
                            30-Second Reels & Shorts Captions
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#64748B' }}>
                            Copy ready-to-record voiceover scripts, text hooks, and description templates.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {reels.map((reel, idx) => (
                            <Grid size={{ xs: 12, md: 6 }} key={idx}>
                                <Card sx={{ border: '1px solid #E7E5E4', borderRadius: 2, boxShadow: 'none' }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="caption" sx={{ color: '#C59D5F', fontWeight: 700, textTransform: 'uppercase' }}>
                                                {reel.category}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#94A3B8' }}>
                                                <PlayCircleOutlinedIcon sx={{ fontSize: '1rem' }} />
                                                <Typography variant="caption">{reel.duration}</Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, color: '#0F172A', mb: 2 }}>
                                            {reel.title}
                                        </Typography>
                                        <Paper sx={{ p: 2.5, backgroundColor: '#F8F8F6', border: '1px solid #E7E5E4', mb: 3 }}>
                                            <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#64748B' }}>
                                                "{reel.hook}"
                                            </Typography>
                                        </Paper>

                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            <Button 
                                                variant="contained" 
                                                color="secondary"
                                                size="small"
                                                onClick={() => handleCopyScript(reel.hook)}
                                                startIcon={<ContentCopyIcon />}
                                                sx={{ color: '#FFFFFF' }}
                                            >
                                                Copy Script
                                            </Button>
                                            <Button 
                                                variant="outlined" 
                                                size="small"
                                                onClick={() => handleShareMock('Instagram Reels')}
                                            >
                                                Download B-Roll
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Myth vs Fact Segment */}
                <Box sx={{ backgroundColor: '#0F172A', color: '#FFFFFF', py: { xs: 10, md: 14 } }}>
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: 'center', mb: 8 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1.5, mb: 2 }}>
                                <HelpOutlinedIcon sx={{ color: '#C59D5F' }} />
                                <Typography variant="overline" sx={{ color: '#C59D5F', letterSpacing: '0.3em', fontWeight: 600 }}>
                                    EDUCATE YOUR AUDIENCE
                                </Typography>
                            </Box>
                            <Typography variant="h2" sx={{ color: '#FFFFFF', fontSize: { xs: '2rem', sm: '2.5rem' }, fontWeight: 600, fontFamily: '"Poppins", sans-serif' }}>
                                Interactive Myth vs. Fact Toggles
                            </Typography>
                        </Box>

                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {myths.map((m, idx) => (
                                        <Box
                                            key={idx}
                                            onClick={() => setSelectedMyth(idx)}
                                            sx={{
                                                p: 3,
                                                borderRadius: 1,
                                                cursor: 'pointer',
                                                border: '1px solid',
                                                borderColor: selectedMyth === idx ? '#C59D5F' : 'rgba(255,255,255,0.08)',
                                                backgroundColor: selectedMyth === idx ? 'rgba(197, 157, 95, 0.08)' : 'transparent',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: selectedMyth === idx ? '#C59D5F' : '#FFFFFF' }}>
                                                Myth #{idx + 1}: {m.myth}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>

                            <Grid size={{ xs: 12, md: 7 }}>
                                <Paper 
                                    sx={{ 
                                        p: { xs: 4, md: 5 }, 
                                        height: '100%', 
                                        backgroundColor: 'rgba(255, 255, 255, 0.01)', 
                                        border: '1px solid rgba(197, 157, 95, 0.25)', 
                                        borderRadius: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        color: '#FFFFFF'
                                    }}
                                >
                                    <Typography variant="overline" sx={{ color: '#10B981', fontWeight: 700, letterSpacing: '0.15em', display: 'block', mb: 2 }}>
                                        ✅ THE VERIFIED FACT
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontSize: '1.4rem', fontWeight: 600, mb: 3, lineHeight: 1.5, color: '#FFFFFF', fontFamily: '"Poppins", sans-serif' }}>
                                        {myths[selectedMyth].fact}
                                    </Typography>
                                    <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Button 
                                            variant="outlined" 
                                            color="secondary"
                                            onClick={() => handleCopyScript(`Myth: ${myths[selectedMyth].myth}\nFact: ${myths[selectedMyth].fact}`)}
                                            startIcon={<ContentCopyIcon />}
                                        >
                                            Copy Fact Script
                                        </Button>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Creator Sharing Panel */}
                <Container maxWidth="md" sx={{ py: { xs: 10, md: 14 }, textAlign: 'center' }}>
                    <ShareIcon sx={{ fontSize: '3rem', color: '#C59D5F', mb: 2 }} />
                    <Typography variant="h2" sx={{ color: '#0F172A', fontSize: '1.8rem', fontWeight: 600, mb: 2, fontFamily: '"Poppins", sans-serif' }}>
                        Share Directly on Your Platform
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748B', maxWidth: '500px', mx: 'auto', mb: 4 }}>
                        Launch templates instantly on your preferred editing software or direct messaging boards.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2.5, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button 
                            variant="outlined" 
                            onClick={() => handleShareMock('Instagram Stories')}
                            startIcon={<ShareIcon />}
                        >
                            Instagram Stories
                        </Button>
                        <Button 
                            variant="outlined" 
                            onClick={() => handleShareMock('YouTube Shorts')}
                            startIcon={<PlayCircleOutlinedIcon />}
                        >
                            YouTube Shorts
                        </Button>
                        <Button 
                            variant="outlined" 
                            onClick={() => handleShareMock('LinkedIn Feed')}
                            startIcon={<LinkedInIcon />}
                        >
                            LinkedIn Post
                        </Button>
                        <Button 
                            variant="outlined" 
                            onClick={() => handleShareMock('WhatsApp broadcast')}
                            startIcon={<WhatsAppIcon />}
                        >
                            WhatsApp Link
                        </Button>
                    </Box>
                </Container>

            </Box>

            <Footer />
            <FloatingWhatsApp />

            {/* Snackbar toast */}
            <Snackbar
                open={toastOpen}
                autoHideDuration={3000}
                onClose={() => setToastOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setToastOpen(false)} severity="success" sx={{ width: '100%' }}>
                    {toastMsg}
                </Alert>
            </Snackbar>
        </Box>
    );
}
