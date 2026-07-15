const site = {
    company: "10KPlots",
    phone: "9743351519",
    whatsapp: "919743351519",
    tagline: "Invest in Land. Invest in Life.",
    email: "info@10kplots.in",
    logo: "/images/logo.png",
    logoAlt: "10KPlots - Premium Residential Layouts",

    menuItems: [
        { label: "Home", id: "home" },
        { label: "Project", id: "project" },
        { label: "Master Plan", id: "master-plan" },
        { label: "Gallery", id: "gallery" },
        { label: "Location", id: "location" },
        { label: "Contact", id: "contact" },
    ],

    get whatsappUrl() {
        return `https://wa.me/${this.whatsapp}`;
    },
};

export default site;
