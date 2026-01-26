// Centralized SEO Configuration
// This file contains all SEO metadata for the entire application

export const defaultSEO = {
  title: "V M FINANCIAL SERVICES",
  description: "Professional financial services and solutions for your business needs",
  keywords: "financial services, consulting, business solutions",
  author: "V M Financial Services",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  ogType: "website",
};

export const pageMetadata = {
  home: {
    title: "V M FINANCIAL SERVICES - Home",
    description: "Welcome to V M Financial Services. Providing expert financial solutions and consulting services.",
    keywords: "financial services, consulting, investment, business",
    path: "/",
  },
  about: {
    title: "About Us - V M FINANCIAL SERVICES",
    description: "Learn about V M Financial Services, our mission, vision, and experienced team.",
    keywords: "about us, company, financial consulting, expertise",
    path: "/about",
  },
  services: {
    title: "Our Services - V M FINANCIAL SERVICES",
    description: "Explore our comprehensive range of financial services and solutions tailored to your needs.",
    keywords: "services, financial solutions, consulting, business services",
    path: "/service",
  },
  whyChooseUs: {
    title: "Why Choose Us - V M FINANCIAL SERVICES",
    description: "Discover why businesses choose V M Financial Services for their financial needs.",
    keywords: "why choose us, benefits, advantages, expertise",
    path: "/whychooseus",
  },
  contact: {
    title: "Contact Us - V M FINANCIAL SERVICES",
    description: "Get in touch with V M Financial Services. We're here to help with your financial inquiries.",
    keywords: "contact us, support, inquiries, customer service",
    path: "/contact",
  },
  award: {
    title: "Awards & Recognition - V M FINANCIAL SERVICES",
    description: "View our awards, certifications, and industry recognition.",
    keywords: "awards, recognition, certifications, achievements",
    path: "/award",
  },
};

// Function to get page metadata
export const getPageMetadata = (page) => {
  return pageMetadata[page] || defaultSEO;
};

// Function to create metadata object for Next.js
export const createMetadata = (pageKey) => {
  const page = pageMetadata[pageKey] || defaultSEO;
  
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    authors: [{ name: defaultSEO.author }],
    robots: defaultSEO.robots,
    viewport: defaultSEO.viewport,
    openGraph: {
      type: defaultSEO.ogType,
      title: page.title,
      description: page.description,
      siteName: defaultSEO.title,
      url: `https://yourdomain.com${page.path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
};

// Structured data for schema.org
export const getStructuredData = (type = "Organization") => {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": type,
    name: defaultSEO.title,
    description: defaultSEO.description,
    url: "https://yourdomain.com",
    telephone: "+1-XXX-XXX-XXXX", // Update with your phone number
    email: "info@yourdomain.com", // Update with your email
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "Country",
    },
    sameAs: [
      "https://www.facebook.com/yourbusiness",
      "https://www.linkedin.com/company/yourbusiness",
      "https://twitter.com/yourbusiness",
    ],
  };

  return baseStructure;
};
