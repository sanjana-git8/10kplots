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
    Paper,
    Snackbar,
    Alert
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import LinkIcon from '@mui/icons-material/Link';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function ReferralProgramPage() {
    // Form State
    const [referrerName, setReferrerName] = useState('');
    const [referrerPhone, setReferrerPhone] = useState('');
    const [friendName, setFriendName] = useState('');
    const [friendPhone, setFriendPhone] = useState('');
    const [relationship, setRelationship] = useState('Friend');
    const [formSubmitted, setFormSubmitted] = useState(false);



    // Toast State
    const [toastOpen, setToastOpen] = useState(false);
    const [toastMsg, setToastMsg] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Silent submission: transition to thank you state directly
        setFormSubmitted(true);
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText("https://www.10kplots.com/referrals");
        setToastMsg("Referral link copied to clipboard!");
        setToastOpen(true);
    };

    const handleWhatsAppShare = () => {
        const text = encodeURIComponent("Hey! I'm referring you to 10KPlots for buying premium residential plots. Use this link to check out their pre-launch offers: https://www.10kplots.com/referrals");
        window.open(`https://wa.me/?text=${text}`, '_blank');
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
                        py: { xs: 10, md: 14 },
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 90% 10%, rgba(197, 157, 95, 0.12) 0%, transparent 50%)', zIndex: 1 }} />
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                            <Box sx={{ width: '40px', height: '1px', backgroundColor: '#C59D5F' }} />
                            <Typography variant="overline" sx={{ fontFamily: '"Inter", sans-serif', letterSpacing: '0.4em', color: '#C59D5F', fontWeight: 600 }}>
                                PARTNERSHIP & REFERRAL NETWORK
                            </Typography>
                        </Box>
                        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }, fontWeight: 700, mb: 3, fontFamily: '"Poppins", sans-serif' }}>
                            Refer a Friend. Earn Rewards.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#94A3B8', fontSize: '1.25rem', fontWeight: 300, maxWidth: '780px', mb: 5 }}>
                            Help your friends, family, or colleagues invest in premium residential plots. Earn attractive rewards upon booking validation with zero limits on earnings.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    const el = document.getElementById('referral-form-section');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                sx={{ py: 1.8, px: 4, color: '#FFFFFF' }}
                            >
                                Refer Someone Now
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{ 
                                    borderColor: 'rgba(255,255,255,0.2)', 
                                    color: '#FFFFFF',
                                    '&:hover': { borderColor: '#C59D5F', color: '#C59D5F' }
                                }}
                                onClick={handleWhatsAppShare}
                                startIcon={<WhatsAppIcon />}
                            >
                                Share on WhatsApp
                            </Button>
                        </Box>
                    </Container>
                </Box>

                {/* Steps Section */}
                <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ p: 4, border: '1px solid #E7E5E4', borderRadius: 2, backgroundColor: '#FFFFFF', textAlign: 'center' }}>
                                <GroupAddIcon sx={{ fontSize: '3rem', color: '#C59D5F', mb: 2 }} />
                                <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, color: '#0F172A', mb: 1.5 }}>
                                    1. Submit Details
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#64748B' }}>
                                    Provide the contact details of the person you are referring via our secure form.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ p: 4, border: '1px solid #E7E5E4', borderRadius: 2, backgroundColor: '#FFFFFF', textAlign: 'center' }}>
                                <MonetizationOnIcon sx={{ fontSize: '3rem', color: '#C59D5F', mb: 2 }} />
                                <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, color: '#0F172A', mb: 1.5 }}>
                                    2. We Guide Them
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#64748B' }}>
                                    Our Relationship Manager reaches out to guide them through site visits and documentation.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                {/* Form & Sharing Section */}
                <Box id="referral-form-section" sx={{ backgroundColor: '#F5F5F2', py: { xs: 10, md: 14 } }}>
                    <Container maxWidth="xl">
                        <Grid container spacing={8}>
                            
                            {/* Left Side: Submit Referral */}
                            <Grid size={{ xs: 12, lg: 7 }}>
                                <Paper sx={{ p: { xs: 4, md: 5 }, borderRadius: 2, border: '1px solid #E7E5E4', boxShadow: 'none' }}>
                                    <AnimatePresence mode="wait">
                                        {!formSubmitted ? (
                                            <motion.div
                                                key="refer-form"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <Typography variant="h2" sx={{ fontSize: '1.8rem', fontWeight: 600, color: '#0F172A', mb: 1.5 }}>
                                                    Submit Referral Details
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#64748B', mb: 4 }}>
                                                    Fill out the form below. We will handle the consultation with absolute care and keep you updated on progress.
                                                </Typography>

                                                <Box component="form" onSubmit={handleFormSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                                    <Grid container spacing={2}>
                                                        <Grid size={{ xs: 12, sm: 6 }}>
                                                            <TextField
                                                                required
                                                                fullWidth
                                                                label="Your Name"
                                                                value={referrerName}
                                                                onChange={(e) => setReferrerName(e.target.value)}
                                                            />
                                                        </Grid>
                                                        <Grid size={{ xs: 12, sm: 6 }}>
                                                            <TextField
                                                                required
                                                                fullWidth
                                                                label="Your Phone / WhatsApp"
                                                                value={referrerPhone}
                                                                onChange={(e) => setReferrerPhone(e.target.value)}
                                                            />
                                                        </Grid>
                                                    </Grid>

                                                    <Grid container spacing={2}>
                                                        <Grid size={{ xs: 12, sm: 6 }}>
                                                            <TextField
                                                                required
                                                                fullWidth
                                                                label="Friend's Name"
                                                                value={friendName}
                                                                onChange={(e) => setFriendName(e.target.value)}
                                                            />
                                                        </Grid>
                                                        <Grid size={{ xs: 12, sm: 6 }}>
                                                            <TextField
                                                                required
                                                                fullWidth
                                                                label="Friend's Phone / WhatsApp"
                                                                value={friendPhone}
                                                                onChange={(e) => setFriendPhone(e.target.value)}
                                                            />
                                                        </Grid>
                                                    </Grid>

                                                    <TextField
                                                        select
                                                        fullWidth
                                                        label="Your Relationship / Relationship Type"
                                                        value={relationship}
                                                        onChange={(e) => setRelationship(e.target.value)}
                                                    >
                                                        <MenuItem value="Friend">Friend Referral</MenuItem>
                                                        <MenuItem value="Family">Family Referral</MenuItem>
                                                        <MenuItem value="Employee">Employee Referral</MenuItem>
                                                        <MenuItem value="Customer">Customer Referral</MenuItem>
                                                        <MenuItem value="Investor">Investor Referral</MenuItem>
                                                        <MenuItem value="Broker">Broker / Channel Partner</MenuItem>
                                                        <MenuItem value="Corporate">Corporate Referral</MenuItem>
                                                    </TextField>

                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        color="secondary"
                                                        endIcon={<SendIcon />}
                                                        sx={{ py: 1.8, alignSelf: 'flex-start' }}
                                                    >
                                                        Submit Referral
                                                    </Button>
                                                </Box>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="success-ref"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                style={{ textAlign: 'center', padding: '20px 0' }}
                                            >
                                                <CheckCircleIcon sx={{ fontSize: '4.5rem', color: '#10B981', mb: 2 }} />
                                                <Typography variant="h2" sx={{ fontSize: '1.8rem', fontWeight: 600, color: '#0F172A', mb: 1 }}>
                                                    Referral Added!
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#64748B', maxWidth: '440px', mx: 'auto', mb: 4 }}>
                                                    Thank you, <strong>{referrerName}</strong>. We've added <strong>{friendName}</strong> to your active tracking dashboard. We will notify you once booking is validated.
                                                </Typography>
                                                <Button 
                                                    variant="contained" 
                                                    color="primary" 
                                                    onClick={() => {
                                                        setFriendName('');
                                                        setFriendPhone('');
                                                        setFormSubmitted(false);
                                                    }}
                                                >
                                                    Refer Another Friend
                                                </Button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Paper>
                            </Grid>

                            {/* Right Side: Share Toolkit */}
                            <Grid size={{ xs: 12, lg: 5 }}>
                                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography variant="overline" sx={{ color: '#C59D5F', letterSpacing: '0.15em', fontWeight: 600, mb: 1 }}>
                                        SHARING TOOLKIT
                                    </Typography>
                                    <Typography variant="h2" sx={{ fontSize: '1.8rem', fontWeight: 600, color: '#0F172A', mb: 2, fontFamily: '"Poppins", sans-serif' }}>
                                        Instant Invite Options
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#64748B', mb: 4 }}>
                                        Use these shortcuts to share your links directly via social apps or email.
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <Button
                                            variant="contained"
                                            onClick={handleWhatsAppShare}
                                            startIcon={<WhatsAppIcon />}
                                            sx={{ 
                                                backgroundColor: '#25D366', 
                                                color: '#FFFFFF', 
                                                border: '1px solid #25D366',
                                                py: 1.8,
                                                '&:hover': { backgroundColor: 'transparent', color: '#25D366' }
                                            }}
                                        >
                                            Share via WhatsApp
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            onClick={handleCopyLink}
                                            startIcon={<LinkIcon />}
                                            sx={{ py: 1.8 }}
                                        >
                                            Copy Referral Link
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            onClick={() => {
                                                window.open("mailto:?subject=Invest in Land with 10KPlots&body=Hey, check out pre-launch plots by 10KPlots at https://www.10kplots.com/referrals");
                                            }}
                                            startIcon={<ShareIcon />}
                                            sx={{ py: 1.8 }}
                                        >
                                            Invite Friends via Email
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>





            </Box>

            <Footer />
            <FloatingWhatsApp />

            {/* Snackbar for Toasts */}
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
