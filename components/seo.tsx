import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export function SEO({
  title,
  description,
  canonical,
  ogImage = "/og-image.jpg",
}: SEOProps) {
  const router = useRouter();
  const siteUrl = "https://askstudio.agency";
  const canonicalUrl = canonical ?? `${siteUrl}${router.asPath}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}
