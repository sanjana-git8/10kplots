'use client';

import React, { useState } from 'react';
import { 
    Box, 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    Tabs, 
    Tab, 
    Button, 
    Dialog, 
    TextField, 
    MenuItem, 
    Checkbox, 
    FormControlLabel, 
    LinearProgress,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SendIcon from '@mui/icons-material/Send';
import InfoIcon from '@mui/icons-material/Info';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import HandshakeIcon from '@mui/icons-material/Handshake';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShieldIcon from '@mui/icons-material/Shield';

import { motion, AnimatePresence } from 'framer-motion';
import { upcomingProjects } from '@/data/upcomingProjectsData';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function UpcomingProjectsPage() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState('Malur');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        priorityAllotment: true,
        downloadBrochure: false,
        scheduleVisit: false,
        contactRM: false
    });

    const handleOpenForm = (projectTitle = 'General Priority Waitlist') => {
        setSelectedProject(projectTitle);
        setFormSubmitted(false);
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: checked
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Silent submission: transition to thank you state directly
        setFormSubmitted(true);
    };

    const waitlistOptions = [
        "Malur",
        "Bangalore East",
        "Hoskote",
        "Kolar",
        "Narasapura",
        "Bangalore - Kolar Corridor"
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
                    <Box 
                        sx={{ 
                            position: 'absolute', 
                            inset: 0, 
                            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(197, 157, 95, 0.12) 0%, transparent 70%)',
                            zIndex: 1 
                        }} 
                    />
                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 3 }}>
                            <Box sx={{ width: '40px', height: '1px', backgroundColor: '#C59D5F' }} />
                            <Typography
                                variant="overline"
                                sx={{
                                    fontFamily: '"Inter", sans-serif',
                                    letterSpacing: '0.4em',
                                    color: '#C59D5F',
                                    fontWeight: 600,
                                    fontSize: '0.85rem'
                                }}
                            >
                                PRE-LAUNCH INVESTMENT HUB
                            </Typography>
                            <Box sx={{ width: '40px', height: '1px', backgroundColor: '#C59D5F' }} />
                        </Box>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                                fontWeight: 700,
                                mb: 3,
                                fontFamily: '"Poppins", sans-serif',
                                lineHeight: 1.1
                            }}
                        >
                            Upcoming Projects
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#94A3B8',
                                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                                fontWeight: 300,
                                maxWidth: '780px',
                                mx: 'auto',
                                mb: 5,
                                lineHeight: 1.7
                            }}
                        >
                            Secure your first-mover advantage. Access wholesale land rates, premium locations, and select plots before they hit the open market.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleOpenForm('General Priority Waitlist')}
                                sx={{ py: 1.8, px: 4, color: '#FFFFFF' }}
                            >
                                Join Priority Waitlist
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{ 
                                    borderColor: 'rgba(255,255,255,0.2)', 
                                    color: '#FFFFFF',
                                    '&:hover': { borderColor: '#C59D5F', color: '#C59D5F' }
                                }}
                                onClick={() => {
                                    const el = document.getElementById('guide-section');
                                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                Read Investor Guide
                            </Button>
                        </Box>
                    </Container>
                </Box>

                {/* Redesigned Standalone Pre-Launch Advantage Section */}
                <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#FFFFFF' }}>
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                                THE PRE-LAUNCH ADVANTAGE
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: '#0F172A',
                                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                    fontWeight: 600,
                                    fontFamily: '"Poppins", sans-serif'
                                }}
                            >
                                Why Secure Pre-Launch Units?
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#64748B', maxWidth: '600px', mx: 'auto', mt: 2 }}>
                                Investing early locks in optimal pricing and ensures priority placement in premium gated plotted communities.
                            </Typography>
                        </Box>

                        <Grid container spacing={4}>
                            {/* Card 1 */}
                            <Grid size={{ xs: 12, md: 4 }}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                >
                                    <Box
                                        sx={{
                                            p: 5,
                                            height: '100%',
                                            borderRadius: '12px',
                                            border: '1px solid #EAEAE6',
                                            backgroundColor: '#F8F8F6',
                                            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.02)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            transition: 'border-color 0.3s ease',
                                            '&:hover': {
                                                borderColor: '#C59D5F'
                                            }
                                        }}
                                    >
                                        <Box 
                                            sx={{ 
                                                width: 60, 
                                                height: 60, 
                                                borderRadius: '50%', 
                                                backgroundColor: 'rgba(197, 157, 95, 0.1)', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                fontSize: '1.75rem',
                                                mb: 3
                                            }}
                                        >
                                            🔒
                                        </Box>
                                        <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: '"Poppins", sans-serif', color: '#0F172A', mb: 2 }}>
                                            Strategic Entry Advantage
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6, fontFamily: '"Inter", sans-serif' }}>
                                            Secure priority access and lock in bottom-cycle pricing before public market appreciation sets in.
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>

                            {/* Card 2 */}
                            <Grid size={{ xs: 12, md: 4 }}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                >
                                    <Box
                                        sx={{
                                            p: 5,
                                            height: '100%',
                                            borderRadius: '12px',
                                            border: '1px solid #EAEAE6',
                                            backgroundColor: '#F8F8F6',
                                            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.02)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            transition: 'border-color 0.3s ease',
                                            '&:hover': {
                                                borderColor: '#C59D5F'
                                            }
                                        }}
                                    >
                                        <Box 
                                            sx={{ 
                                                width: 60, 
                                                height: 60, 
                                                borderRadius: '50%', 
                                                backgroundColor: 'rgba(197, 157, 95, 0.1)', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                fontSize: '1.75rem',
                                                mb: 3
                                            }}
                                        >
                                            ⭐
                                        </Box>
                                        <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: '"Poppins", sans-serif', color: '#0F172A', mb: 2 }}>
                                            Priority Unit Choice
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6, fontFamily: '"Inter", sans-serif' }}>
                                            Select prime corner plots, premium locations, or units with direct road access first, before inventory is public.
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>

                            {/* Card 3 */}
                            <Grid size={{ xs: 12, md: 4 }}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                >
                                    <Box
                                        sx={{
                                            p: 5,
                                            height: '100%',
                                            borderRadius: '12px',
                                            border: '1px solid #EAEAE6',
                                            backgroundColor: '#F8F8F6',
                                            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.02)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            transition: 'border-color 0.3s ease',
                                            '&:hover': {
                                                borderColor: '#C59D5F'
                                            }
                                        }}
                                    >
                                        <Box 
                                            sx={{ 
                                                width: 60, 
                                                height: 60, 
                                                borderRadius: '50%', 
                                                backgroundColor: 'rgba(197, 157, 95, 0.1)', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                fontSize: '1.75rem',
                                                mb: 3
                                            }}
                                        >
                                            📈
                                        </Box>
                                        <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: '"Poppins", sans-serif', color: '#0F172A', mb: 2 }}>
                                            Capital Appreciation
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6, fontFamily: '"Inter", sans-serif' }}>
                                            Unlock significant equity growth as layout development progresses from initial planning stage to grand launch.
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Coming Soon & Priority Alert section */}
                <Box id="explore-projects" sx={{ py: { xs: 12, md: 16 }, backgroundColor: '#F8F8F6' }}>
                    <Container maxWidth="md">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: '#0F172A',
                                    borderRadius: '16px',
                                    p: { xs: 6, md: 8 },
                                    textAlign: 'center',
                                    boxShadow: '0 20px 50px rgba(15, 23, 42, 0.25)',
                                    border: '1px solid rgba(197, 157, 95, 0.3)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '-50%',
                                        right: '-30%',
                                        width: '400px',
                                        height: '400px',
                                        borderRadius: '50%',
                                        background: 'radial-gradient(circle, rgba(197, 157, 95, 0.1) 0%, transparent 70%)',
                                        zIndex: 0
                                    }}
                                />

                                <Box sx={{ position: 'relative', zIndex: 1 }}>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontFamily: '"Poppins", sans-serif',
                                            fontWeight: 700,
                                            color: '#C59D5F',
                                            fontSize: '0.8rem',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            display: 'inline-block',
                                            border: '1px solid rgba(197, 157, 95, 0.4)',
                                            borderRadius: '4px',
                                            px: 2.5,
                                            py: 0.75,
                                            mb: 4
                                        }}
                                    >
                                        New Projects Launching Soon
                                    </Typography>
                                    
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            color: '#FFFFFF',
                                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                            fontWeight: 600,
                                            fontFamily: '"Poppins", sans-serif',
                                            lineHeight: 1.2,
                                            mb: 3
                                        }}
                                    >
                                        Landmark Communities Under Curation
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: '#94A3B8',
                                            fontSize: '1.1rem',
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: '640px',
                                            mx: 'auto',
                                            mb: 5
                                        }}
                                    >
                                        We are finalizing licenses and planning infrastructure for premium gated community layouts in Bangalore's major development rings. Join our priority list to gain exclusive first-choice allotment and special early-bird rates.
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        onClick={() => handleOpenForm('General Priority Waitlist')}
                                        sx={{
                                            py: 2,
                                            px: 6,
                                            fontSize: '0.9rem',
                                            letterSpacing: '0.15em',
                                            color: '#FFFFFF',
                                            borderRadius: '4px',
                                            boxShadow: '0 4px 20px rgba(197, 157, 95, 0.2)'
                                        }}
                                    >
                                        Join Priority Waitlist
                                    </Button>
                                </Box>
                            </Box>
                        </motion.div>
                    </Container>
                </Box>

                {/* Educational Investor Guide (Simple Language) */}
                <Box id="guide-section" sx={{ backgroundColor: '#0F172A', color: '#FFFFFF', py: { xs: 12, md: 16 } }}>
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: 'center', mb: 8 }}>
                            <Typography variant="overline" sx={{ color: '#C59D5F', letterSpacing: '0.3em', fontWeight: 600 }}>
                                Simple Investor Guide
                            </Typography>
                            <Typography 
                                variant="h2" 
                                sx={{ 
                                    color: '#FFFFFF', 
                                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, 
                                    fontWeight: 600,
                                    mt: 1,
                                    fontFamily: '"Poppins", sans-serif'
                                }}
                            >
                                Understanding Pre-Launch Investments
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#94A3B8', maxWidth: '600px', mx: 'auto', mt: 2 }}>
                                Real estate investment shouldn't feel like rocket science. Here is everything you need to know explained in plain, simple terms.
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            
                            <Accordion sx={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.08)', backgroundImage: 'none' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#C59D5F' }} />}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <InfoIcon sx={{ color: '#C59D5F' }} />
                                        <Typography sx={{ fontWeight: 600, fontFamily: '"Poppins", sans-serif' }}>
                                            What is "Pre-launch"?
                                        </Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#94A3B8', p: 3 }}>
                                    Pre-launch is the earliest stage of a real estate project. It is the time *before* the project is officially launched to the public. During this time, the developer is finalizing plans and applying for licenses. To fund the initial work, they offer units to early investors at discounted, wholesale rates.
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.08)', backgroundImage: 'none' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#C59D5F' }} />}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <ShieldIcon sx={{ color: '#C59D5F' }} />
                                        <Typography sx={{ fontWeight: 600, fontFamily: '"Poppins", sans-serif' }}>
                                            Why do investors buy before RERA?
                                        </Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#94A3B8', p: 3 }}>
                                    Investors buy at this stage because it is the **cheapest** the property will ever be. Once the developer gets the official government approval (RERA number) and launches the project publicly, the price instantly jumps by 15% to 30%. Buying pre-RERA locks in this immediate gain.
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.08)', backgroundImage: 'none' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#C59D5F' }} />}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <HandshakeIcon sx={{ color: '#C59D5F' }} />
                                        <Typography sx={{ fontWeight: 600, fontFamily: '"Poppins", sans-serif' }}>
                                            What are the benefits?
                                        </Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#94A3B8', p: 3 }}>
                                    1. <strong>Lowest Price Guarantee:</strong> You purchase at wholesale cost.<br/>
                                    2. <strong>Priority Choice:</strong> You get to choose the best plots or units before anyone else.<br/>
                                    3. <strong>Flexible Payments:</strong> Developers often offer highly flexible installment plans during this stage.
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.08)', backgroundImage: 'none' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#C59D5F' }} />}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <WarningAmberIcon sx={{ color: '#C59D5F' }} />
                                        <Typography sx={{ fontWeight: 600, fontFamily: '"Poppins", sans-serif' }}>
                                            What are the risks & safeguards?
                                        </Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#94A3B8', p: 3 }}>
                                    The primary risk is **approval delay**—the government might take longer than expected to grant licenses. To safeguard your investment, 10KPlots only partners with reputed developers who have clear land ownership records. We perform extensive background legal audits on all projects beforehand.
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.08)', backgroundImage: 'none' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#C59D5F' }} />}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <CalendarMonthIcon sx={{ color: '#C59D5F' }} />
                                        <Typography sx={{ fontWeight: 600, fontFamily: '"Poppins", sans-serif' }}>
                                            How does booking & refund work?
                                        </Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#94A3B8', p: 3 }}>
                                    To express interest, you submit a small booking token along with an Expression of Interest (EOI) form. This reserves your priority slot. <strong>If approvals are delayed or you change your mind before the official launch, the token is 100% fully refundable</strong> with no deductions, ensuring completely stress-free investment conditions.
                                </AccordionDetails>
                            </Accordion>

                            <Accordion sx={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.08)', backgroundImage: 'none' }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#C59D5F' }} />}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <DescriptionIcon sx={{ color: '#C59D5F' }} />
                                        <Typography sx={{ fontWeight: 600, fontFamily: '"Poppins", sans-serif' }}>
                                            What legal documentation is signed?
                                        </Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#94A3B8', p: 3 }}>
                                    You will sign an official **Expression of Interest (EOI) receipt** detailing the priority allotment terms, the selected unit type, the locked-in pre-launch price, and the full refund policy. Once RERA approval is received, this is converted into a standard Sale Agreement.
                                </AccordionDetails>
                            </Accordion>

                        </Box>
                    </Container>
                </Box>

            </Box>

            <Footer />
            <FloatingWhatsApp />

            {/* "Block Your Unit Early" Form Dialog */}
            <Dialog 
                open={isFormOpen} 
                onClose={handleCloseForm}
                maxWidth="sm"
                fullWidth
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: 2,
                            p: 3,
                            backgroundColor: '#FFFFFF'
                        }
                    }
                }}
            >
                <Box>
                    <AnimatePresence mode="wait">
                        {!formSubmitted ? (
                            <motion.div
                                key="form-fields"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <Typography variant="h3" sx={{ fontSize: '1.6rem', fontWeight: 600, color: '#0F172A', mb: 1 }}>
                                    Join Priority Waitlist
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#64748B', mb: 3 }}>
                                    Be the first to receive project portfolios, early pricing sheets, and select premium inventory maps.
                                </Typography>

                                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Full Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        variant="outlined"
                                        size="medium"
                                    />
                                    
                                    <TextField
                                        required
                                        fullWidth
                                        label="Phone Number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        variant="outlined"
                                        size="medium"
                                        placeholder="e.g. 9743351519"
                                    />

                                    <TextField
                                        required
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        variant="outlined"
                                        size="medium"
                                    />

                                    <TextField
                                        select
                                        fullWidth
                                        label="Preferred Gated Location"
                                        value={selectedProject}
                                        onChange={(e) => setSelectedProject(e.target.value)}
                                        variant="outlined"
                                    >
                                        {waitlistOptions.map((opt, idx) => (
                                            <MenuItem key={idx} value={opt}>
                                                {opt}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    {/* Action Preferences */}
                                    <Box sx={{ mt: 1, p: 2, borderRadius: 1, backgroundColor: '#F8F8F6', border: '1px solid #E7E5E4' }}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#0F172A', mb: 1 }}>
                                            Select Preferences (Choose all that apply):
                                        </Typography>
                                        <FormControlLabel
                                            control={
                                                <Checkbox 
                                                    checked={formData.priorityAllotment} 
                                                    onChange={handleCheckboxChange} 
                                                    name="priorityAllotment" 
                                                    sx={{ '&.Mui-checked': { color: '#C59D5F' } }}
                                                />
                                            }
                                            label={<Typography variant="body2">Reserve Priority Allotment</Typography>}
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox 
                                                    checked={formData.downloadBrochure} 
                                                    onChange={handleCheckboxChange} 
                                                    name="downloadBrochure" 
                                                    sx={{ '&.Mui-checked': { color: '#C59D5F' } }}
                                                />
                                            }
                                            label={<Typography variant="body2">Get Brochure on Release</Typography>}
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox 
                                                    checked={formData.scheduleVisit} 
                                                    onChange={handleCheckboxChange} 
                                                    name="scheduleVisit" 
                                                    sx={{ '&.Mui-checked': { color: '#C59D5F' } }}
                                                />
                                            }
                                            label={<Typography variant="body2">Schedule Site Visit</Typography>}
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox 
                                                    checked={formData.contactRM} 
                                                    onChange={handleCheckboxChange} 
                                                    name="contactRM" 
                                                    sx={{ '&.Mui-checked': { color: '#C59D5F' } }}
                                                />
                                            }
                                            label={<Typography variant="body2">Request Call Back</Typography>}
                                        />
                                    </Box>

                                    <Box sx={{ display: 'flex', gap: 2, mt: 1, justifyContent: 'flex-end' }}>
                                        <Button variant="outlined" onClick={handleCloseForm} color="primary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" variant="contained" color="secondary" endIcon={<SendIcon />}>
                                            Join Waitlist
                                        </Button>
                                    </Box>
                                </Box>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success-message"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                style={{ textAlign: 'center', padding: '30px 10px' }}
                            >
                                <CheckCircleIcon sx={{ fontSize: '4.5rem', color: '#10B981', mb: 2 }} />
                                <Typography variant="h3" sx={{ fontSize: '1.6rem', fontWeight: 600, color: '#0F172A', mb: 1 }}>
                                    Waitlist Joined!
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#64748B', maxWidth: '420px', mx: 'auto', mb: 4, lineHeight: 1.6 }}>
                                    Thank you, <strong>{formData.name}</strong>. Your priority reservation is recorded. 
                                    {formData.priorityAllotment && " Your pre-launch reservation number is active."}
                                    Our Relationship Manager will reach out to you shortly via phone/WhatsApp.
                                </Typography>
                                <Button variant="contained" color="primary" onClick={handleCloseForm}>
                                    Close Window
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Box>
            </Dialog>
        </Box>
    );
}
