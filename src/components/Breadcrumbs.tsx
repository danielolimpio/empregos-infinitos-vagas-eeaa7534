import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  useEffect(() => {
    // Remove existing breadcrumb schema
    const existingSchema = document.getElementById('breadcrumb-schema');
    if (existingSchema) existingSchema.remove();

    // Create BreadcrumbList structured data
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://vagasdetrabalhos.com/"
        },
        ...items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": item.label,
          ...(item.href && { "item": `https://vagasdetrabalhos.com${item.href}` })
        }))
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'breadcrumb-schema';
    script.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const schema = document.getElementById('breadcrumb-schema');
      if (schema) schema.remove();
    };
  }, [items]);

  return (
    <div className="bg-muted/30 py-3 px-4 md:px-6">
      <div className="container mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  <span className="sr-only md:not-sr-only">Início</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <BreadcrumbItem>
                  {index === items.length - 1 || !item.href ? (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  ) : (
                    <>
                      <BreadcrumbLink asChild>
                        <Link to={item.href}>{item.label}</Link>
                      </BreadcrumbLink>
                      <BreadcrumbSeparator>
                        <ChevronRight className="h-4 w-4" />
                      </BreadcrumbSeparator>
                    </>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;
