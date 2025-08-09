import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  structuredData?: Record<string, any> | Record<string, any>[];
}

const SEO = ({ title, description, canonical, structuredData }: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);

    // Structured data (JSON-LD)
    const existingLd = document.getElementById('ld-json');
    if (existingLd) existingLd.remove();

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'ld-json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, structuredData]);

  return null;
};

export default SEO;
