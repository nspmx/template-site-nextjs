/* eslint-disable max-len */
export function defaultSEOGenerator(BASE_URL) {
  return {
    openGraph: {
      images: [
        {url: `${BASE_URL}/images/share/share.png`},
      ],
      type: "website",
      locale: "es_ES",
      url: BASE_URL,
      siteName: "Client Site",
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "icon",
        href: "/favicon-16x16.png",
        size: "16x16",
      },
      {
        rel: "icon",
        href: "/favicon-32x32.png",
        size: "32x32",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "android-chrome",
        href: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        href: "/android-chrome-512x512.png",
        sizes: "512x512",
      }
    ],
    defaultTitle: "Client Site",
    description: "Client Site Description.",
    themeColor: "#000000",
    titleTemplate: "%s | Client Site",
  };
}
