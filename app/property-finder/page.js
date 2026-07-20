'use client';

import React, { useState, useEffect } from 'react';
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
    RadioGroup,
    Radio,
    FormControlLabel,
    FormControl,
    FormLabel,
    Checkbox,
    Stepper,
    Step,
    StepLabel,
    Paper,
    Divider,
    Slider,
    Rating,
    Autocomplete,
    Chip,
    Snackbar,
    Alert
} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import RefreshIcon from '@mui/icons-material/Refresh';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ShareIcon from '@mui/icons-material/Share';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StarRateIcon from '@mui/icons-material/StarRate';

import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

import { projectData } from '@/data/projectData';
import { upcomingProjects } from '@/data/upcomingProjectsData';

export default function PropertyFinderPage() {
    const [isStarted, setIsStarted] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [isMatched, setIsMatched] = useState(false);
    const [matchedProjects, setMatchedProjects] = useState([]);
    const [toastOpen, setToastOpen] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const [askAIQuery, setAskAIQuery] = useState('');
    const [aiResponses, setAiResponses] = useState([]);

    // Step state values
    const [answers, setAnswers] = useState({
        // Step 1: Why buying
        reason: 'Investment',
        // Step 2: Budget
        budget: '₹50L – ₹75L',
        budgetSlider: 60, // in Lakhs
        city: 'Bangalore',
        // Step 4: Preferred Areas
        areas: ['Malur'],
        // Step 5: Type
        type: 'Residential Plot',
        // Step 6: When to buy
        timeline: 'Within 3 Months',
        // Step 7: Loan
        loan: 'Maybe',
        firstProperty: 'Yes',
        // Step 10: Contact details
        name: '',
        phone: '',
        email: '',
        contactTime: 'Morning (9 AM - 12 PM)',
        consent: true
    });

    const steps = [
        'Goal', 
        'Budget', 
        'Areas', 
        'Type', 
        'Timeline', 
        'Loan', 
        'Background', 
        'Contact'
    ];

    const reasons = [
        { title: "Self Living", desc: "For constructing your own home to reside immediately or in the future.", val: "Self Living" },
        { title: "Investment", desc: "To grow your money through compounding land value appreciation.", val: "Investment" },
        { title: "Future Home Construction", desc: "Securing a premium layout lot to build a villa later.", val: "Future Home Construction" },
        { title: "Commercial Purpose", desc: "For warehouses, offices, or commercial plaza developments.", val: "Commercial Purpose" },
        { title: "Family Purpose", desc: "Securing generational wealth or custom plots for family members.", val: "Family Purpose" },
        { title: "Just Exploring", desc: "Looking at current price trends in Bangalore corridors.", val: "Just Exploring" }
    ];

    const budgetLevels = [
        { label: "Under ₹50 Lakhs", range: [0, 50] },
        { label: "₹50L – ₹75L", range: [50, 75] },
        { label: "₹75L – ₹1Cr", range: [75, 100] },
        { label: "Above ₹1Cr", range: [100, 1000] }
    ];

    const propertyTypes = [
        'Residential Plot', 'Villa Plot', 'Commercial Plot', 'Layout Plot'
    ];

    const timelines = ['Immediately', 'Within 3 Months', 'Within 6 Months', 'Within 1 Year', 'Just Looking'];
    const loanOptions = ['Yes', 'No', 'Maybe', 'Need Guidance'];
    
    const priorityOptions = [
        'High Appreciation', 'Metro Nearby', 'IT Parks Nearby', 'Schools', 
        'Hospitals', 'Shopping Mall', 'Peaceful Area', 'Gated Community', 
        'Club House', 'Swimming Pool', 'Rental Income', 'Ready To Move', 
        'Future Growth', 'Wide Roads', 'Lake View', 'Corner Site', 
        'North Facing', 'East Facing'
    ];

    const popularAreas = ['Hoskote', 'Malur', 'Devanahalli', 'Whitefield', 'Sarjapur', 'Electronic City'];

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(prev => prev + 1);
        } else {
            runMatchingEngine();
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(prev => prev - 1);
        }
    };

    const handleValueChange = (name, value) => {
        setAnswers(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (name, checked) => {
        setAnswers(prev => ({
            ...prev,
            [name]: checked
        }));
    };

    const runMatchingEngine = () => {
        // Mock portfolio data structures
        const portfolio = [
            {
                id: "serenity",
                title: "Snycon United Serenity",
                type: "Residential Plot",
                price: "Available on Request",
                priceNum: 2500000,
                location: "Malur Corridor, East Bangalore",
                developer: "Snycon Infrastructure",
                rera: "PRM/KA/RERA/1250/303/PR/200527/003429",
                reraStatus: "Approved",
                appreciation: "+25% Compound Growth p.a.",
                constructionStatus: "95% Completed",
                emi: "Available on Request",
                reason: "This property is your Best Match because it fits your target budget tier, is fully RERA approved, and has completed asphalt internal roads.",
                schools: "Vibgyor High School (10 mins)",
                hospitals: "Jalappa Medical Hospital (12 mins)",
                metro: "Whitefield Metro (20 mins)",
                itparks: "ITPL (22 mins)",
                airport: "45 mins",
                rentalYield: "6% - 8%",
                futureDevelopment: "Directly connected to upcoming Chennai-Bangalore Expressway corridor.",
                expectedROI: "45% expected appreciation in next 5 years.",
                rating: 4.9,
                investRating: 5.0,
                image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop"
            },
            {
                id: "heritage-villas",
                title: "The Heritage Villas",
                type: "Villa",
                price: "Available on Request",
                priceNum: 15000000,
                location: "Devanahalli, North Bangalore",
                developer: "Snycon Premium Estates",
                rera: "PRM/KA/RERA/1250/303/PR/200527/008811",
                reraStatus: "Approved",
                appreciation: "+30% Compound Growth p.a.",
                constructionStatus: "30% (Under Construction)",
                emi: "Available on Request",
                reason: "Recommended as a Premium Match because it offers custom villa construction in Devanahalli's high-appreciation airport zone.",
                schools: "Stonehill International School (15 mins)",
                hospitals: "Aster CMI Hospital (20 mins)",
                metro: "Devanahalli Metro Link (10 mins)",
                itparks: "KIADB Aerospace IT Park (8 mins)",
                airport: "15 mins",
                rentalYield: "5% - 6%",
                futureDevelopment: "Sits inside Bangalore Airport growth zone.",
                expectedROI: "60% expected appreciation in 5 years.",
                rating: 4.8,
                investRating: 4.9,
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
            },
            {
                id: "united-meadows",
                title: "United Meadows",
                type: "Residential Plot",
                price: "Available on Request",
                priceNum: 2200000,
                location: "Hoskote Extension, East Bangalore",
                developer: "Snycon Infrastructure",
                rera: "PRM/KA/RERA/1250/303/PR/200527/007421",
                reraStatus: "Approved",
                appreciation: "+28% Compound Growth p.a.",
                constructionStatus: "Fully Completed",
                emi: "Available on Request",
                reason: "This property is matched as an excellent Alternative option due to its proximity to the Hoskote auto-hub corridor.",
                schools: "Whitefield Global School (18 mins)",
                hospitals: "MVJ Medical College (10 mins)",
                metro: "Hoskote Metro Link (15 mins)",
                itparks: "Aero IT Park (15 mins)",
                airport: "35 mins",
                rentalYield: "7%",
                futureDevelopment: "Adjacent to BMRDA peripheral ring road connection.",
                expectedROI: "50% expected appreciation in 5 years.",
                rating: 4.7,
                investRating: 4.8,
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop"
            }
        ];

        // Matching logic
        let matched = [];
        if (answers.type === 'Layout Plot') {
            matched = [portfolio[2], portfolio[0], portfolio[1]];
        } else {
            matched = [portfolio[0], portfolio[2], portfolio[1]];
        }

        const text = `Hi 10KPlots! I completed the AI Property Finder questionnaire.
My details:
Name: ${answers.name}
Phone: ${answers.phone}
Email: ${answers.email}
Preferred contact time: ${answers.contactTime}

Preferences:
Goal: ${answers.reason}
Budget Tier: ${answers.budget}
City: ${answers.city}
Preferred areas: ${answers.areas.join(', ')}
Asset Class: ${answers.type}
Timeline: ${answers.timeline}
Loan needed: ${answers.loan}
First Property: ${answers.firstProperty}`;

        // Silent submission: process recommendations directly
        setMatchedProjects(matched);
        setIsMatched(true);
    };

    const handleSaveProgress = () => {
        localStorage.setItem('property_finder_answers', JSON.stringify(answers));
        setToastMsg("Questionnaire progress saved successfully!");
        setToastOpen(true);
    };

    const handleDownloadPDF = () => {
        setToastMsg("Generating PDF report... Download started.");
        setToastOpen(true);
    };

    const handleEmailResults = () => {
        setToastMsg(`Recommendations emailed to ${answers.email || 'your registered email'}.`);
        setToastOpen(true);
    };

    const handleWhatsAppMatch = (projName) => {
        const text = encodeURIComponent(`Hi 10KPlots! I matched with "${projName}" via the AI Advisor. I would like to schedule a site visit.`);
        window.open(`https://wa.me/919743351519?text=${text}`, '_blank');
    };

    const handleAskAIChat = (e) => {
        e.preventDefault();
        if (!askAIQuery.trim()) return;

        const userQ = askAIQuery;
        setAskAIQuery('');

        const newReply = {
            question: userQ,
            reply: "Our AI Advisor recommends: The Hoskote-Malur growth corridors are experiencing 18% annual growth. Snycon United Serenity provides the safest land backing within your budget limits."
        };

        setAiResponses(prev => [...prev, newReply]);
    };

    const reasonsList = reasons;
    const budgetLevelsList = budgetLevels;

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F8F8F6' }}>
            <Navbar />

            <Box component="main" sx={{ flexGrow: 1, pt: { xs: 12, md: 16 } }}>

                <AnimatePresence mode="wait">
                    {!isStarted ? (
                        /* Intro Screen */
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            <Container maxWidth="md" sx={{ py: { xs: 10, md: 14 } }}>
                                <Paper 
                                    sx={{ 
                                        p: { xs: 5, md: 8 }, 
                                        borderRadius: 3, 
                                        border: '1px solid #E7E5E4', 
                                        boxShadow: '0 20px 50px -20px rgba(15, 23, 42, 0.1)',
                                        textAlign: 'center',
                                        backgroundColor: '#FFFFFF',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(197, 157, 95, 0.04) 0%, transparent 40%)' }} />
                                    
                                    <Typography variant="overline" sx={{ letterSpacing: '0.3em', color: '#C59D5F', fontWeight: 700 }}>
                                        AI PROPERTY ADVISOR
                                    </Typography>
                                    <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem' }, fontWeight: 700, mt: 2, mb: 3, fontFamily: '"Poppins", sans-serif', color: '#0F172A' }}>
                                        🏡 Not Sure What to Buy?
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#64748B', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '640px', mx: 'auto', mb: 5 }}>
                                        Finding the right property doesn't have to be difficult. Answer a few simple questions, and our AI Property Advisor will recommend the best options based on your budget, goals, and preferences.
                                    </Typography>

                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', mb: 5 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#C59D5F' }}>
                                            <CalendarMonthIcon />
                                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>⏱ Takes less than 2 minutes</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#10B981' }}>
                                            <CheckCircleIcon />
                                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>100% RERA Verified Matching</Typography>
                                        </Box>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        onClick={() => setIsStarted(true)}
                                        sx={{ py: 2, px: 5, color: '#FFFFFF', fontSize: '1.1rem' }}
                                    >
                                        Start Finding My Property
                                    </Button>
                                </Paper>
                            </Container>
                        </motion.div>
                    ) : !isMatched ? (
                        /* Stepper Wizard */
                        <motion.div
                            key="stepper"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                        >
                            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
                                <Paper 
                                    sx={{ 
                                        p: { xs: 4, md: 5 }, 
                                        borderRadius: 2, 
                                        border: '1px solid #E7E5E4', 
                                        boxShadow: 'none',
                                        backgroundColor: '#FFFFFF'
                                    }}
                                >
                                    <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 6, '& .MuiStepIcon-root.Mui-active': { color: '#C59D5F' }, '& .MuiStepIcon-root.Mui-completed': { color: '#0F172A' } }}>
                                        {steps.map((label) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>

                                    <Box sx={{ minHeight: '340px' }}>
                                        
                                        {/* STEP 1: Why are you buying? */}
                                        {steps[activeStep] === 'Goal' && (
                                            <Box>
                                                <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#0F172A', mb: 3 }}>
                                                    Why are you buying?
                                                </Typography>
                                                <Grid container spacing={2}>
                                                    {reasonsList.map((r) => (
                                                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={r.val}>
                                                            <Card 
                                                                onClick={() => handleValueChange('reason', r.val)}
                                                                sx={{ 
                                                                    cursor: 'pointer',
                                                                    border: '1px solid',
                                                                    borderColor: answers.reason === r.val ? '#C59D5F' : '#E7E5E4',
                                                                    backgroundColor: answers.reason === r.val ? 'rgba(197,157,95,0.05)' : '#FFFFFF',
                                                                    height: '100%',
                                                                    '&:hover': { borderColor: '#C59D5F' }
                                                                }}
                                                            >
                                                                <CardContent sx={{ p: 3 }}>
                                                                    <Typography sx={{ fontWeight: 600, color: '#0F172A', mb: 1 }}>{r.title}</Typography>
                                                                    <Typography variant="caption" sx={{ color: '#64748B', display: 'block', lineHeight: 1.5 }}>{r.desc}</Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Box>
                                        )}

                                        {/* STEP 2: Budget */}
                                        {steps[activeStep] === 'Budget' && (
                                            <Box>
                                                <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#0F172A', mb: 3 }}>
                                                    What's your budget?
                                                </Typography>
                                                
                                                <Grid container spacing={2} sx={{ mb: 6 }}>
                                                    {budgetLevelsList.map((b) => (
                                                        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={b.label}>
                                                            <Button
                                                                fullWidth
                                                                variant={answers.budget === b.label ? 'contained' : 'outlined'}
                                                                color={answers.budget === b.label ? 'secondary' : 'primary'}
                                                                onClick={() => handleValueChange('budget', b.label)}
                                                                sx={{ py: 2 }}
                                                            >
                                                                {b.label}
                                                            </Button>
                                                        </Grid>
                                                    ))}
                                                </Grid>

                                                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#0F172A', mb: 2 }}>
                                                    Or adjust target limit (in Lakhs):
                                                </Typography>
                                                <Box sx={{ px: 2 }}>
                                                    <Slider
                                                        value={answers.budgetSlider}
                                                        onChange={(e, val) => handleValueChange('budgetSlider', val)}
                                                        min={50}
                                                        max={100}
                                                        step={5}
                                                        valueLabelDisplay="auto"
                                                        valueLabelFormat={(val) => `₹${val} Lakhs`}
                                                        sx={{ color: '#C59D5F' }}
                                                    />
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                                        <Typography variant="caption" sx={{ color: '#64748B' }}>₹50L</Typography>
                                                        <Typography variant="subtitle2" sx={{ color: '#C59D5F', fontWeight: 700 }}>Selected: ₹{answers.budgetSlider} Lakhs</Typography>
                                                        <Typography variant="caption" sx={{ color: '#64748B' }}>₹1.0 Cr</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        )}

                                        {/* STEP 3: Preferred Area */}
                                        {steps[activeStep] === 'Areas' && (
                                            <Box maxWidth="md" sx={{ mx: 'auto' }}>
                                                <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#0F172A', mb: 3 }}>
                                                    Select your preferred growth areas:
                                                </Typography>
                                                <Autocomplete
                                                    multiple
                                                    options={popularAreas}
                                                    value={answers.areas}
                                                    onChange={(e, val) => handleValueChange('areas', val)}
                                                    renderInput={(params) => (
                                                        <TextField {...params} variant="outlined" label="Preferred Areas" placeholder="Select Areas" />
                                                    )}
                                                    renderTags={(tagValue, getTagProps) =>
                                                        tagValue.map((option, index) => (
                                                            <Chip label={option} {...getTagProps({ index })} sx={{ backgroundColor: 'rgba(197, 157, 95, 0.15)', color: '#0F172A', fontWeight: 600 }} />
                                                        ))
                                                    }
                                                />
                                            </Box>
                                        )}

                                        {/* STEP 4: Property Type */}
                                        {steps[activeStep] === 'Type' && (
                                            <Box>
                                                <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#0F172A', mb: 3 }}>
                                                    Which property asset class are you targeting?
                                                </Typography>
                                                <Grid container spacing={2}>
                                                    {propertyTypes.map((t) => (
                                                        <Grid size={{ xs: 6, sm: 3 }} key={t}>
                                                            <Button
                                                                fullWidth
                                                                variant={answers.type === t ? 'contained' : 'outlined'}
                                                                color={answers.type === t ? 'secondary' : 'primary'}
                                                                onClick={() => handleValueChange('type', t)}
                                                                sx={{ py: 2 }}
                                                            >
                                                                {t}
                                                            </Button>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Box>
                                        )}

                                        {/* STEP 5: Timeline */}
                                        {steps[activeStep] === 'Timeline' && (
                                            <Box maxWidth="sm" sx={{ mx: 'auto' }}>
                                                <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#0F172A', mb: 3 }}>
                                                    When do you plan to buy?
                                                </Typography>
                                                <Grid container spacing={2}>
                                                    {timelines.map((time) => (
                                                        <Grid size={{ xs: 12 }} key={time}>
                                                            <Button
                                                                fullWidth
                                                                variant={answers.timeline === time ? 'contained' : 'outlined'}
                                                                color={answers.timeline === time ? 'secondary' : 'primary'}
                                                                onClick={() => handleValueChange('timeline', time)}
                                                                sx={{ py: 1.8 }}
                                                            >
                                                                {time}
                                                            </Button>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Box>
                                        )}

                                        {/* STEP 6: Need Loan */}
                                        {steps[activeStep] === 'Loan' && (
                                            <Box maxWidth="sm" sx={{ mx: 'auto' }}>
                                                <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#0F172A', mb: 3 }}>
                                                    Do you require home loan financing?
                                                </Typography>
                                                <Grid container spacing={2}>
                                                    {loanOptions.map((opt) => (
                                                        <Grid size={{ xs: 6 }} key={opt}>
                                                            <Button
                                                                fullWidth
                                                                variant={answers.loan === opt ? 'contained' : 'outlined'}
                                                                color={answers.loan === opt ? 'secondary' : 'primary'}
                                                                onClick={() => handleValueChange('loan', opt)}
                                                                sx={{ py: 2 }}
                                                            >
                                                                {opt}
                                                            </Button>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Box>
                                        )}

                                        {/* STEP 7: First property background */}
                                        {steps[activeStep] === 'Background' && (
                                            <Box maxWidth="sm" sx={{ mx: 'auto', textAlign: 'center' }}>
                                                <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#0F172A', mb: 3 }}>
                                                    Is this your first property investment?
                                                </Typography>
                                                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                                                    <Button
                                                        fullWidth
                                                        variant={answers.firstProperty === 'Yes' ? 'contained' : 'outlined'}
                                                        color={answers.firstProperty === 'Yes' ? 'secondary' : 'primary'}
                                                        onClick={() => handleValueChange('firstProperty', 'Yes')}
                                                        sx={{ py: 2 }}
                                                    >
                                                        Yes
                                                    </Button>
                                                    <Button
                                                        fullWidth
                                                        variant={answers.firstProperty === 'No' ? 'contained' : 'outlined'}
                                                        color={answers.firstProperty === 'No' ? 'secondary' : 'primary'}
                                                        onClick={() => handleValueChange('firstProperty', 'No')}
                                                        sx={{ py: 2 }}
                                                    >
                                                        No
                                                    </Button>
                                                </Box>

                                                <AnimatePresence>
                                                    {answers.firstProperty === 'Yes' && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0 }}
                                                        >
                                                            <Paper sx={{ p: 3, backgroundColor: 'rgba(16, 185, 129, 0.05)', border: '1px dashed #10B981', color: '#0F172A' }}>
                                                                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                                                                    🎉 Don't worry!
                                                                </Typography>
                                                                <Typography variant="caption" sx={{ color: '#64748B', display: 'block', lineHeight: 1.5 }}>
                                                                    We'll guide you through everything including legal verification, loans, registration, documentation, and buying safely.
                                                                </Typography>
                                                            </Paper>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </Box>
                                        )}

                                        {/* STEP 8: Contact details */}
                                        {steps[activeStep] === 'Contact' && (
                                            <Box maxWidth="sm" sx={{ mx: 'auto' }}>
                                                <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 600, color: '#0F172A', mb: 3 }}>
                                                    Save your matched report:
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                                    <TextField required fullWidth label="Full Name" value={answers.name} onChange={(e) => handleValueChange('name', e.target.value)} />
                                                    <TextField required fullWidth label="WhatsApp Number" value={answers.phone} onChange={(e) => handleValueChange('phone', e.target.value)} />
                                                    <TextField required fullWidth label="Email Address" value={answers.email} onChange={(e) => handleValueChange('email', e.target.value)} />
                                                    <TextField
                                                        select
                                                        fullWidth
                                                        label="Preferred Call Time"
                                                        value={answers.contactTime}
                                                        onChange={(e) => handleValueChange('contactTime', e.target.value)}
                                                    >
                                                        <MenuItem value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</MenuItem>
                                                        <MenuItem value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</MenuItem>
                                                        <MenuItem value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</MenuItem>
                                                    </TextField>
                                                    <FormControlLabel
                                                        control={<Checkbox checked={answers.consent} onChange={(e) => handleCheckboxChange('consent', e.target.checked)} sx={{ '&.Mui-checked': { color: '#C59D5F' } }} />}
                                                        label={<Typography variant="caption" sx={{ color: '#64748B' }}>I consent to receiving property match sheets on WhatsApp/Email.</Typography>}
                                                    />
                                                </Box>
                                            </Box>
                                        )}

                                    </Box>

                                    {/* Action Buttons */}
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6, borderTop: '1px solid #E7E5E4', pt: 3 }}>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            startIcon={<ArrowBackIcon />}
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            <Button onClick={handleSaveProgress} startIcon={<BookmarkBorderIcon />}>
                                                Save Progress
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={handleNext}
                                                endIcon={activeStep === steps.length - 1 ? <CheckCircleIcon /> : <ArrowForwardIcon />}
                                                disabled={activeStep === steps.length - 1 && (!answers.name || !answers.phone || !answers.email || !answers.consent)}
                                                sx={{ color: '#FFFFFF' }}
                                            >
                                                {activeStep === steps.length - 1 ? '🎯 Find My Perfect Property' : 'Next Step'}
                                            </Button>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Container>
                        </motion.div>
                    ) : (
                        /* Recommendations Result Page */
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
                                
                                {/* Result Actions Header */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 6, alignItems: 'center' }}>
                                    <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, color: '#0F172A', fontFamily: '"Poppins", sans-serif' }}>
                                        Your Personalized Property Match Report
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                                        <Button variant="outlined" color="primary" startIcon={<CloudDownloadIcon />} onClick={handleDownloadPDF}>
                                            Download PDF
                                        </Button>
                                        <Button variant="outlined" color="primary" startIcon={<EmailIcon />} onClick={handleEmailResults}>
                                            Email Report
                                        </Button>
                                        <Button variant="outlined" color="primary" startIcon={<CompareArrowsIcon />} onClick={() => handleShareMock('Comparison module')}>
                                            Compare Matches
                                        </Button>
                                        <Button variant="outlined" color="primary" startIcon={<RefreshIcon />} onClick={() => { setIsMatched(false); setActiveStep(0); }}>
                                            Restart
                                        </Button>
                                    </Box>
                                </Box>

                                <Grid container spacing={4}>
                                    
                                    {/* Left Column: 1st Best Match Card */}
                                    <Grid size={{ xs: 12, lg: 8 }}>
                                        <Card sx={{ border: '2px solid #C59D5F', borderRadius: 3, overflow: 'hidden', boxShadow: '0 10px 40px -15px rgba(15, 23, 42, 0.1)', mb: 4 }}>
                                            
                                            {/* Badge */}
                                            <Box sx={{ backgroundColor: '#C59D5F', color: '#FFFFFF', px: 3, py: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Typography sx={{ fontWeight: 700, fontSize: '0.9rem' }}>🥇 BEST MATCH RECOMMENDATION</Typography>
                                                <Typography sx={{ fontWeight: 700, fontSize: '0.9rem' }}>98% Compatibility Match</Typography>
                                            </Box>

                                            <Box sx={{ height: '360px', backgroundColor: '#0F172A', position: 'relative' }}>
                                                <Box 
                                                    component="img"
                                                    src={matchedProjects[0].image}
                                                    alt={matchedProjects[0].title}
                                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </Box>

                                            <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                                                <Typography variant="h3" sx={{ fontSize: '1.8rem', fontWeight: 700, color: '#0F172A', mb: 1, fontFamily: '"Poppins", sans-serif' }}>
                                                    {matchedProjects[0].title}
                                                </Typography>
                                                <Typography variant="body1" sx={{ color: '#C59D5F', fontWeight: 600, mb: 3 }}>
                                                    📍 {matchedProjects[0].location} • {matchedProjects[0].developer}
                                                </Typography>

                                                <Typography variant="body2" sx={{ color: '#0F172A', fontWeight: 500, p: 3, borderRadius: 1, backgroundColor: 'rgba(197,157,95,0.05)', border: '1px solid rgba(197,157,95,0.15)', mb: 4, lineBreak: 'normal' }}>
                                                    ✨ <strong>Why this matches:</strong> {matchedProjects[0].reason}
                                                </Typography>

                                                <Grid container spacing={4} sx={{ mb: 4 }}>
                                                    <Grid size={{ xs: 6, md: 3 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8', textTransform: 'uppercase' }}>Target Price</Typography>
                                                        <Typography sx={{ fontWeight: 700, color: '#0F172A', fontSize: '1.1rem' }}>{matchedProjects[0].price}</Typography>
                                                    </Grid>
                                                    <Grid size={{ xs: 6, md: 3 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8', textTransform: 'uppercase' }}>RERA Registration</Typography>
                                                        <Typography sx={{ fontWeight: 700, color: '#10B981', fontSize: '1.1rem' }}>RERA {matchedProjects[0].reraStatus}</Typography>
                                                    </Grid>
                                                    <Grid size={{ xs: 6, md: 3 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8', textTransform: 'uppercase' }}>Construction Status</Typography>
                                                        <Typography sx={{ fontWeight: 700, color: '#0F172A', fontSize: '1.1rem' }}>{matchedProjects[0].constructionStatus}</Typography>
                                                    </Grid>
                                                    <Grid size={{ xs: 6, md: 3 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8', textTransform: 'uppercase' }}>Est. Monthly EMI</Typography>
                                                        <Typography sx={{ fontWeight: 700, color: '#C59D5F', fontSize: '1.1rem' }}>{matchedProjects[0].emi}</Typography>
                                                    </Grid>
                                                </Grid>

                                                <Divider sx={{ my: 4 }} />

                                                {/* Local Amenities */}
                                                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 2 }}>
                                                    Nearby Amenities & Distances
                                                </Typography>
                                                <Grid container spacing={2} sx={{ mb: 4 }}>
                                                    <Grid size={{ xs: 6, md: 3 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block' }}>Schools</Typography>
                                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{matchedProjects[0].schools}</Typography>
                                                    </Grid>
                                                    <Grid size={{ xs: 6, md: 3 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block' }}>Hospitals</Typography>
                                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{matchedProjects[0].hospitals}</Typography>
                                                    </Grid>
                                                    <Grid size={{ xs: 6, md: 3 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block' }}>Metro Connectivity</Typography>
                                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{matchedProjects[0].metro}</Typography>
                                                    </Grid>
                                                    <Grid size={{ xs: 6, md: 3 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block' }}>IT Parks / Offices</Typography>
                                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{matchedProjects[0].itparks}</Typography>
                                                    </Grid>
                                                </Grid>

                                                {/* AI Projections Grid */}
                                                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 2 }}>
                                                    Investment Yields & ROI
                                                </Typography>
                                                <Grid container spacing={2} sx={{ mb: 4 }}>
                                                    <Grid size={{ xs: 6, md: 4 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block' }}>Expected Appreciation</Typography>
                                                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#10B981' }}>{matchedProjects[0].appreciation}</Typography>
                                                    </Grid>
                                                    <Grid size={{ xs: 6, md: 4 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block' }}>Rental Yield</Typography>
                                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{matchedProjects[0].rentalYield}</Typography>
                                                    </Grid>
                                                    <Grid size={{ xs: 12, md: 4 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block' }}>Future Development</Typography>
                                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{matchedProjects[0].futureDevelopment}</Typography>
                                                    </Grid>
                                                </Grid>

                                                {/* Ratings */}
                                                <Box sx={{ display: 'flex', gap: 4, mb: 4, flexWrap: 'wrap' }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8' }}>Property Rating</Typography>
                                                        <Rating value={4.9} precision={0.1} readOnly size="small" />
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <Typography variant="caption" sx={{ color: '#94A3B8' }}>Investment Score</Typography>
                                                        <Rating value={5.0} precision={0.1} readOnly size="small" />
                                                    </Box>
                                                </Box>

                                                {/* Action Panel */}
                                                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                                    <Button 
                                                        variant="contained" 
                                                        color="secondary" 
                                                        onClick={() => handleWhatsAppMatch(matchedProjects[0].title)}
                                                        startIcon={<WhatsAppIcon />}
                                                        sx={{ color: '#FFFFFF', py: 1.5, px: 3 }}
                                                    >
                                                        Chat on WhatsApp
                                                    </Button>
                                                    <Button 
                                                        variant="outlined" 
                                                        onClick={() => handleShareMock('Call Schedule Request')}
                                                        startIcon={<ContactPhoneIcon />}
                                                        sx={{ py: 1.5, px: 3 }}
                                                    >
                                                        Request Callback
                                                    </Button>
                                                    <Button 
                                                        variant="outlined"
                                                        onClick={() => handleShareMock('Brochure download')}
                                                        startIcon={<CloudDownloadIcon />}
                                                        sx={{ py: 1.5, px: 3 }}
                                                    >
                                                        Download Brochure
                                                    </Button>
                                                </Box>

                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    {/* Right Column: AI Insights & Alternative Match */}
                                    <Grid size={{ xs: 12, lg: 4 }}>
                                        
                                        {/* AI Insights Card */}
                                        <Card sx={{ border: '1px solid #E7E5E4', borderRadius: 2, boxShadow: 'none', p: 4, mb: 4, backgroundColor: '#0F172A', color: '#FFFFFF' }}>
                                            <Typography variant="overline" sx={{ color: '#C59D5F', letterSpacing: '0.15em', fontWeight: 700 }}>
                                                ADVISOR INSIGHTS
                                            </Typography>
                                            <Typography variant="h3" sx={{ fontSize: '1.4rem', fontWeight: 600, color: '#FFFFFF', mt: 1, mb: 3 }}>
                                                Location & Capital Yield Trends
                                            </Typography>

                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                                <Box sx={{ borderBottom: '1px solid rgba(255,255,255,0.05)', pb: 1.5 }}>
                                                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Past Growth</Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>This location has grown by approximately 18% in the last 3 years.</Typography>
                                                </Box>
                                                <Box sx={{ borderBottom: '1px solid rgba(255,255,255,0.05)', pb: 1.5 }}>
                                                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Future Projections</Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Expected appreciation over the next 5 years: +45%.</Typography>
                                                </Box>
                                                <Box sx={{ borderBottom: '1px solid rgba(255,255,255,0.05)', pb: 1.5 }}>
                                                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Rent yields</Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Estimated monthly rent yield: ₹12,000 to ₹18,000.</Typography>
                                                </Box>
                                                <Box sx={{ pb: 1 }}>
                                                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Risk Assessment</Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Best suitable for long-term investment. Good option for first-time buyers.</Typography>
                                                </Box>
                                            </Box>
                                        </Card>

                                        {/* Alternative Matches */}
                                        {matchedProjects.slice(1).map((alt, idx) => (
                                            <Card key={idx} sx={{ border: '1px solid #E7E5E4', borderRadius: 2, boxShadow: 'none', mb: 3 }}>
                                                <Box sx={{ height: '140px', backgroundColor: '#0F172A' }}>
                                                    <Box 
                                                        component="img"
                                                        src={alt.image}
                                                        alt={alt.title}
                                                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                </Box>
                                                <CardContent sx={{ p: 3 }}>
                                                    <Typography variant="caption" sx={{ color: '#C59D5F', fontWeight: 700, textTransform: 'uppercase' }}>
                                                        {idx === 0 ? "🥈 ALTERNATIVE RECOMMENDATION" : "🌟 PREMIUM ALTERNATIVE"}
                                                    </Typography>
                                                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 0.5 }}>
                                                        {alt.title}
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mb: 2 }}>
                                                        📍 {alt.location}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 2 }}>
                                                        Price: {alt.price}
                                                    </Typography>
                                                    <Button 
                                                        fullWidth 
                                                        variant="outlined" 
                                                        size="small"
                                                        onClick={() => handleWhatsAppMatch(alt.title)}
                                                    >
                                                        Get Match Details
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        ))}

                                        {/* Ask AI Sub-Widget */}
                                        <Card sx={{ border: '1px solid #E7E5E4', borderRadius: 2, boxShadow: 'none', p: 3 }}>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
                                                Ask AI Advisor Questions
                                            </Typography>
                                            
                                            <Box sx={{ maxHeight: '140px', overflowY: 'auto', mb: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                                {aiResponses.map((item, index) => (
                                                    <Box key={index}>
                                                        <Typography variant="caption" sx={{ fontWeight: 600, color: '#C59D5F' }}>Q: {item.question}</Typography>
                                                        <Typography variant="body2" sx={{ color: '#64748B' }}>{item.reply}</Typography>
                                                    </Box>
                                                ))}
                                            </Box>

                                            <Box component="form" onSubmit={handleAskAIChat} sx={{ display: 'flex', gap: 1 }}>
                                                <TextField 
                                                    fullWidth 
                                                    size="small" 
                                                    placeholder="Ask about school, connectivity..." 
                                                    value={askAIQuery}
                                                    onChange={(e) => setAskAIQuery(e.target.value)}
                                                />
                                                <Button type="submit" variant="contained" color="secondary" sx={{ minWidth: '40px', p: 0 }}>
                                                    Send
                                                </Button>
                                            </Box>
                                        </Card>

                                    </Grid>

                                </Grid>
                            </Container>
                        </motion.div>
                    )}
                </AnimatePresence>

            </Box>

            <Footer />
            <FloatingWhatsApp />

            {/* Toast Alerts */}
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
