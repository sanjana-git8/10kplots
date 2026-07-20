import { Poppins, Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import "./globals.css";
import Providers from "./providers";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata = {
    title: "10KPlots - Invest in Land. Invest in Life.",
    description: "Premium plotted developments crafted for modern families, smart investors and lasting value. Discover RERA approved layouts in prime locations like Malur, Kolar.",
    authors: [{ name: '10KPlots' }],
    creator: '10KPlots Dev Team',
    publisher: '10KPlots',
    metadataBase: new URL('https://www.10kplots.com'), // Replace with actual production domain during active CI/CD deployment
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "10KPlots - Invest in Land. Invest in Life.",
        description: "Premium plotted developments crafted for modern families, smart investors and lasting value.",
        url: "https://10kplots.in",
        siteName: '10KPlots',
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: '10KPlots Premium Entryway',
            },
        ],
        locale: 'en_IN',
        type: 'website',
        },
    twitter: {
        card: "summary_large_image",
        title: "10KPlots - Invest in Land. Invest in Life.",
        description: "Premium plotted developments crafted for modern families, smart investors and lasting value.",
        images: ["/images/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

export const viewport = {
    themeColor: '#0F172A',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
            <body>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <Providers>{children}</Providers>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}