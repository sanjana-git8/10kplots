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
    TextField, 
    MenuItem,
    Paper
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function ChannelPartnerPage() {
    const [category, setCategory] = useState('Channel Partner');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [region, setRegion] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Silent submission: transition to thank you state directly
        setFormSubmitted(true);
    };

    const categories = [
        { name: "Channel Partner", desc: "For established brokerage firms seeking bulk layout inventories and dedicated relationship manager support.", benefit: "Highest commission slab + co-branded event support." },
        { name: "Sales Partner", desc: "For individual real estate agents aiming to accelerate property closures with our premium RERA layouts.", benefit: "48-hour commission clearance guarantee." },
        { name: "Independent Agent", desc: "For part-time property brokers seeking a stable, trusted inventory of land to refer to their network.", benefit: "Direct marketing material & pitch training support." },
        { name: "Real Estate Consultant", desc: "For wealth managers and financial planners advising HNW clients on asset protection.", benefit: "Dedicated legal and title verification access." },
        { name: "Builder Partner", desc: "For local builders looking to offer layout packages or co-market villa-development layouts.", benefit: "Immediate land pipeline for building construction contracts." },
        { name: "Land Owner", desc: "For landowners wanting to unlock maximum value through professional joint-venture plotting layout systems.", benefit: "Complete legal, layout planning, and sales management." },
        { name: "Marketing Partner", desc: "For digital agencies and performance marketers driving customer walk-ins and layout site visits.", benefit: "Direct integration with our CRM leads pipeline." },
        { name: "Digital Influencer", desc: "For social creators and property reviewers reviewing plotted layouts for their target audience.", benefit: "Exclusive affiliate booking links & video sponsorship." }
    ];


    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F8F8F6' }}>
            <Navbar />

            <Box component="main" sx={{ flexGrow: 1, pt: { xs: 12, md: 16 } }}>

                {/* Hero Section */}
                <Box 
                    sx={{ 
                        backgroundColor: '#0F172A', 
                        color: '#FFFFFF',
                        py: { xs: 10, md: 14 },
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 80%, rgba(197, 157, 95, 0.12) 0%, transparent 50%)', zIndex: 1 }} />
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                            <Box sx={{ width: '40px', height: '1px', backgroundColor: '#C59D5F' }} />
                            <Typography variant="overline" sx={{ fontFamily: '"Inter", sans-serif', letterSpacing: '0.4em', color: '#C59D5F', fontWeight: 600 }}>
                                PARTNER RECRUITMENT HUB
                            </Typography>
                        </Box>
                        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }, fontWeight: 700, mb: 3, fontFamily: '"Poppins", sans-serif' }}>
                            Work With Us
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#94A3B8', fontSize: '1.25rem', fontWeight: 300, maxWidth: '780px', mb: 5 }}>
                            Join India's most transparent and high-growth real estate platform. We offer premium RERA-approved plotting inventories, direct marketing kits, and the fastest payouts in the industry.
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                const el = document.getElementById('registration-section');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            sx={{ py: 1.8, px: 4, color: '#FFFFFF' }}
                        >
                            Become a Partner
                        </Button>
                    </Container>
                </Box>

                {/* Categories Grid */}
                <Container maxWidth="xl" sx={{ py: { xs: 10, md: 16 } }}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h2" sx={{ color: '#0F172A', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, fontWeight: 600, fontFamily: '"Poppins", sans-serif', mb: 2 }}>
                            Partnership Categories
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#64748B', maxWidth: '600px', mx: 'auto' }}>
                            We have tailored programs for every type of professional. Select your track and start growing.
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        {categories.map((cat, idx) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                                <Card sx={{ height: '100%', borderRadius: 2, border: '1px solid #E7E5E4', boxShadow: 'none' }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant="h3" sx={{ fontSize: '1.3rem', fontWeight: 600, color: '#0F172A', mb: 1.5 }}>
                                            {cat.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#64748B', mb: 2, lineBreak: 'normal' }}>
                                            {cat.desc}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#C59D5F', fontWeight: 600 }}>
                                            🎁 Key Benefit: {cat.benefit}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>



                {/* Registration Section */}
                <Container id="registration-section" maxWidth="lg" sx={{ py: { xs: 10, md: 16 } }}>
                    <Grid container spacing={8} sx={{ justifyContent: 'center' }}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Paper sx={{ p: { xs: 4, md: 5 }, borderRadius: 2, border: '1px solid #E7E5E4', boxShadow: 'none' }}>
                                <AnimatePresence mode="wait">
                                    {!formSubmitted ? (
                                        <motion.div
                                            key="reg-form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 600, color: '#0F172A', mb: 1.5, textAlign: 'center' }}>
                                                Become a Partner
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#64748B', mb: 4, textAlign: 'center' }}>
                                                Register your profile. Our onboarding relationship officer will contact you within 24 hours to active your account.
                                            </Typography>

                                            <Box component="form" onSubmit={handleFormSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    label="Your Full Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                <Grid container spacing={2}>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            label="Phone / WhatsApp"
                                                            value={phone}
                                                            onChange={(e) => setPhone(e.target.value)}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            label="Email Address"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2}>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                        <TextField
                                                            fullWidth
                                                            label="Company / Agency Name (Optional)"
                                                            value={company}
                                                            onChange={(e) => setCompany(e.target.value)}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, sm: 6 }}>
                                                        <TextField
                                                            required
                                                            fullWidth
                                                            label="Operating Region / City"
                                                            value={region}
                                                            onChange={(e) => setRegion(e.target.value)}
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <TextField
                                                    select
                                                    fullWidth
                                                    label="Partner Category"
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                >
                                                    {categories.map((cat, idx) => (
                                                        <MenuItem key={idx} value={cat.name}>
                                                            {cat.name}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>

                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="secondary"
                                                    endIcon={<SendIcon />}
                                                    sx={{ py: 1.8 }}
                                                >
                                                    Submit Partner Registration
                                                </Button>
                                            </Box>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success-reg"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            style={{ textAlign: 'center', padding: '30px 10px' }}
                                        >
                                            <CheckCircleIcon sx={{ fontSize: '4.5rem', color: '#10B981', mb: 2 }} />
                                            <Typography variant="h2" sx={{ fontSize: '1.8rem', fontWeight: 600, color: '#0F172A', mb: 1.5 }}>
                                                Registration Received!
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#64748B', maxWidth: '440px', mx: 'auto', mb: 4 }}>
                                                Thank you, <strong>{name}</strong>. Your partner registration under <strong>{category}</strong> is saved. Our Partner Success team will call you within 24 hours to schedule onboarding training.
                                            </Typography>
                                            <Button variant="contained" color="primary" onClick={() => setFormSubmitted(false)}>
                                                Back to Partner Portal
                                            </Button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>



            </Box>

            <Footer />
            <FloatingWhatsApp />
        </Box>
    );
}
