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
    Rating
} from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import TimelineIcon from '@mui/icons-material/Timeline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

import { projectData } from '@/data/projectData';

export default function TrustCenterPage() {
    const [reviewIndex, setReviewIndex] = useState(0);

    const verifications = [
        { title: "Verified Properties", desc: "100% of our listing inventory has cleared comprehensive legal title verification covering the last 30 years.", icon: <ShieldIcon sx={{ fontSize: '2.5rem', color: '#C59D5F' }} /> },
        { title: "Verified Developers", desc: "We partner exclusively with land developers who possess documented records of layout delivery.", icon: <AccountBalanceIcon sx={{ fontSize: '2.5rem', color: '#C59D5F' }} /> },
        { title: "RERA Registrations", desc: "Every project features a validated RERA registration code, preventing unapproved sales.", icon: <CheckCircleIcon sx={{ fontSize: '2.5rem', color: '#C59D5F' }} /> },
        { title: "Zero Title Disputes", desc: "We coordinate parent-deeds audit logs with independent legal panels to ensure absolute transaction safety.", icon: <LibraryBooksIcon sx={{ fontSize: '2.5rem', color: '#C59D5F' }} /> }
    ];

    const milestones = [
        { step: "1. Land Title & Boundaries Clearing", status: "Completed", date: "Jan 2025" },
        { step: "2. DC Conversion Approved", status: "Completed", date: "Mar 2025" },
        { step: "3. BMRDA / Planning Authority NOC", status: "Completed", date: "Aug 2025" },
        { step: "4. RERA Code Granted", status: "Completed", date: "Nov 2025" },
        { step: "5. Asphalt Roads & Strom Water Drains", status: "Completed", date: "Feb 2026" },
        { step: "6. Individual Plot Boundaries & Electrical Lines", status: "Completed", date: "May 2026" },
        { step: "7. Municipal Handover & A-Khata Registration", status: "In Progress", date: "Aug 2026 (Est.)" }
    ];

    const reviews = [
        { name: "Rohan Patel", role: "Plot Investor", comment: "Bought a plot at Snycon United Serenity. Registration completed within 4 weeks. Fully smooth process!", rating: 5 },
        { name: "Dr. Amit Verma", role: "Resident Owner", comment: "Transparent documentation. They provided the parent deed going back 40 years before I booked. Unbelievable legal service.", rating: 5 },
        { name: "Shreya Sen", role: "Villa Buyer", comment: "RERA approvals are verified. Excellent location appreciation in Hoskote corridor.", rating: 5 }
    ];

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
                    <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 10% 90%, rgba(197, 157, 95, 0.12) 0%, transparent 60%)', zIndex: 1 }} />
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                            <Box sx={{ width: '40px', height: '1px', backgroundColor: '#C59D5F' }} />
                            <Typography variant="overline" sx={{ fontFamily: '"Inter", sans-serif', letterSpacing: '0.4em', color: '#C59D5F', fontWeight: 600 }}>
                                TRUST & TRANSPARENCY HUB
                            </Typography>
                        </Box>
                        <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' }, fontWeight: 700, mb: 3, fontFamily: '"Poppins", sans-serif' }}>
                            Zero Risk Property Ownership
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#94A3B8', fontSize: '1.25rem', fontWeight: 300, maxWidth: '780px' }}>
                            We audit legal titles, zoning clearances, and construction progress milestones so you can invest with absolute peace of mind.
                        </Typography>
                    </Container>
                </Box>

                {/* Verification Grid */}
                <Container maxWidth="xl" sx={{ py: { xs: 10, md: 14 } }}>
                    <Grid container spacing={4}>
                        {verifications.map((item, idx) => (
                            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={idx}>
                                <Card sx={{ height: '100%', borderRadius: 2, border: '1px solid #E7E5E4', boxShadow: 'none' }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Box sx={{ mb: 2 }}>{item.icon}</Box>
                                        <Typography variant="h3" sx={{ fontSize: '1.3rem', fontWeight: 600, color: '#0F172A', mb: 1.5 }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.7 }}>
                                            {item.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Live Construction Timeline */}
                <Box sx={{ backgroundColor: '#F5F5F2', py: { xs: 10, md: 14 } }}>
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: 'center', mb: 8 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1.5, mb: 2 }}>
                                <TimelineIcon sx={{ color: '#C59D5F' }} />
                                <Typography variant="overline" sx={{ color: '#C59D5F', letterSpacing: '0.3em', fontWeight: 600 }}>
                                    REAL-TIME PROGRESS TRACKING
                                </Typography>
                            </Box>
                            <Typography variant="h2" sx={{ color: '#0F172A', fontSize: { xs: '2rem', sm: '2.5rem' }, fontWeight: 600, fontFamily: '"Poppins", sans-serif' }}>
                                Gated Layout Development Milestones
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#64748B', mt: 2 }}>
                                Track our active layout construction stages directly. Transparent progress updates updated weekly.
                            </Typography>
                        </Box>

                        <Paper variant="outlined" sx={{ p: 4, borderRadius: 2 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                                {milestones.map((m, idx) => (
                                    <Box key={idx} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: idx !== milestones.length - 1 ? '1px solid #E7E5E4' : 'none', pb: 2.5 }}>
                                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                            <Box 
                                                sx={{ 
                                                    width: '24px', 
                                                    height: '24px', 
                                                    borderRadius: '50%', 
                                                    backgroundColor: m.status === 'Completed' ? '#10B981' : '#F59E0B',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#FFFFFF',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 700
                                                }}
                                            >
                                                ✓
                                            </Box>
                                            <Typography sx={{ fontWeight: 600, color: '#0F172A' }}>{m.step}</Typography>
                                        </Box>
                                        <Box sx={{ textAlign: 'right' }}>
                                            <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block' }}>{m.date}</Typography>
                                            <Typography 
                                                variant="caption" 
                                                sx={{ 
                                                    fontWeight: 700, 
                                                    color: m.status === 'Completed' ? '#10B981' : '#F59E0B'
                                                }}
                                            >
                                                {m.status}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Container>
                </Box>

                {/* Google Reviews Slider */}
                <Container maxWidth="md" sx={{ py: { xs: 10, md: 14 } }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Rating value={5} readOnly emptyIcon={<StarIcon />} sx={{ color: '#FBBF24', fontSize: '2.5rem', mb: 2 }} />
                        <Typography variant="h2" sx={{ color: '#0F172A', fontSize: '1.8rem', fontWeight: 600, fontFamily: '"Poppins", sans-serif', mb: 1 }}>
                            What Our Gated Community Members Say
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#64748B' }}>
                            Rated <strong>4.8/5</strong> based on 450+ verified land registry transfers.
                        </Typography>
                    </Box>

                    <Paper 
                        variant="outlined" 
                        sx={{ 
                            p: 5, 
                            borderRadius: 2, 
                            textAlign: 'center', 
                            position: 'relative',
                            backgroundColor: '#FFFFFF'
                        }}
                    >
                        <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#0F172A', fontSize: '1.25rem', mb: 4, lineHeight: 1.6 }}>
                            "{reviews[reviewIndex].comment}"
                        </Typography>
                        <Typography sx={{ fontWeight: 700, color: '#0F172A' }}>{reviews[reviewIndex].name}</Typography>
                        <Typography variant="caption" sx={{ color: '#C59D5F', fontWeight: 600 }}>{reviews[reviewIndex].role}</Typography>

                        <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', mt: 4 }}>
                            {reviews.map((r, idx) => (
                                <Box
                                    key={idx}
                                    onClick={() => setReviewIndex(idx)}
                                    sx={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        backgroundColor: reviewIndex === idx ? '#C59D5F' : '#E7E5E4',
                                        cursor: 'pointer'
                                    }}
                                />
                            ))}
                        </Box>
                    </Paper>
                </Container>

                {/* Legal & Reports Download Banner */}
                <Box sx={{ backgroundColor: '#0F172A', color: '#FFFFFF', py: 8 }}>
                    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
                        <Box>
                            <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#FFFFFF', mb: 1 }}>
                                Legal Verification Pack
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                                Download RERA certifications, layout approval maps, and land conversions documents folder.
                            </Typography>
                        </Box>
                        <Button 
                            variant="contained" 
                            color="secondary"
                            startIcon={<CloudDownloadIcon />}
                            onClick={() => window.open('tel:9743351519')}
                            sx={{ py: 1.8, px: 3, color: '#FFFFFF' }}
                        >
                            Get Transparency Folder
                        </Button>
                    </Container>
                </Box>

            </Box>

            <Footer />
            <FloatingWhatsApp />
        </Box>
    );
}
