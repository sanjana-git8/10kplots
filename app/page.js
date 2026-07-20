'use client';

import React from 'react';
import { Box } from '@mui/material';

// Import our custom premium UI blocks
import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import FeaturedProject from '@/components/FeaturedProject';
import WhyInvest from '@/components/WhyInvest';
import MasterPlan from '@/components/MasterPlan';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                width: '100vw',
                overflowX: 'hidden',
                backgroundColor: '#F8F8F6', // Luxury Off White background
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* Premium Navigation Hub */}
            <Navbar />

            {/* Narrative Section Sequence */}
            <Box component="main" sx={{ flexGrow: 1 }}>
                {/* Section 1: Cinematic Entry Gate */}
                <Hero />

                {/* Section 2: Heritage brand storytelling block */}
                <Story />

                {/* Section 3: flagship project detail deck */}
                <FeaturedProject />

                {/* Section 3.5: Strategic Investment Benefits */}
                <WhyInvest />

                {/* Section 4: Multi-level Interactive blueprint viewer */}
                <MasterPlan />

                {/* Section 5: Masonry photography exhibit */}
                <Gallery />

                {/* Section 6: Location proximity & mapping coordinate matrix */}
                <Location />

                {/* Section 7: Conversions & private client advisory desk */}
                <Contact />
            </Box>

            {/* Structural Minimal Brand Terminus */}
            <Footer />

            {/* Sticky High-intent interactive conversion anchor */}
            <FloatingWhatsApp />
        </Box>
    );
}