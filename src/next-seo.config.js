const BASE_URL = 'https://henry.pm';

const title = 'Henry Trianta | Blogs';
const description = 'Henry Trianta Website';

const SEO = {
  title,
  description,
  canonical: `${BASE_URL}`,
  twitter: {
    handle: '@henrytrianta',
    site: '@henrytrianta',
    cardType: 'summary_large_image'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: `${BASE_URL}`,
    title,
    description,
    images: [
      {
        url: `${BASE_URL}/static/images/og.png`,
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
