import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Bio Generator",
  description:
    "Transform your professional story into an engaging bio that captures attention and showcases your unique value on LinkedIn, your personal website, or portfolio",
  generator: "Aldo Tobing",
  keywords: [
    "personal bio",
    "bio generator",
    "LinkedIn bio",
    "portfolio bio",
    "professional bio",
    "personal story",
    "bio writing",
    "bio creation",
  ],
  applicationName: "Personal Bio Generator",
  openGraph: {
    title: "Personal Bio Generator",
    description:
      "Create your professional bio with ease using our tool. Perfect for LinkedIn, portfolios, and websites.",
    url: "https://linkedin.aldotobing.online",
    siteName: "Personal Bio Generator",
    images: [
      {
        url: "https://linkedin.aldotobing.online/assets/img/llama.png",
        width: 1200,
        height: 630,
        alt: "Personal Bio Generator Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Bio Generator",
    description:
      "Generate your unique professional bio easily and effectively for LinkedIn and personal websites.",
    images: ["https://linkedin.aldotobing.online/assets/img/llama.png"],
  },
  alternates: {
    canonical: "https://linkedin.aldotobing.online",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Aldo Tobing" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Personal Bio Generator",
              url: "https://linkedin.aldotobing.online",
              description:
                "Transform your professional story into an engaging bio with ease.",
              applicationCategory: "Utility",
              operatingSystem: "All",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
