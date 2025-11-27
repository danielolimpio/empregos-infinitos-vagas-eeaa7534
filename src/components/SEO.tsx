import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  structuredData?: Record<string, any> | Record<string, any>[];
  keywords?: string;
  image?: string;
}

const SEO = ({ title, description, canonical, structuredData, keywords, image }: SEOProps) => {
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

    // Meta keywords
    if (keywords) {
      let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.name = 'keywords';
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', keywords);
    }

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:type', content: 'website' },
    ];

    if (image) {
      ogTags.push({ property: 'og:image', content: image });
    }

    ogTags.forEach(({ property, content }) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', content);
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ];

    if (image) {
      twitterTags.push({ name: 'twitter:image', content: image });
    }

    twitterTags.forEach(({ name, content }) => {
      let twitterMeta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!twitterMeta) {
        twitterMeta = document.createElement('meta');
        twitterMeta.name = name;
        document.head.appendChild(twitterMeta);
      }
      twitterMeta.setAttribute('content', content);
    });

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
  }, [title, description, canonical, structuredData, keywords, image]);

  return null;
};

export default SEO;
