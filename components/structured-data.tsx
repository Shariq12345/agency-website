export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ASK Studio",
          url: "https://askstudio.agency",
          logo: "https://askstudio.agency/logo.png",
          sameAs: [
            "https://www.linkedin.com/company/askstudio",
            "https://github.com/askstudio",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-982-040-4970",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
        }),
      }}
    />
  );
}

export function WebServiceSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Web Development",
          provider: {
            "@type": "Organization",
            name: "ASK Studio",
          },
          areaServed: {
            "@type": "Country",
            name: "India",
          },
          description:
            "Professional web development services using modern technologies",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "INR",
            },
          },
        }),
      }}
    />
  );
}
