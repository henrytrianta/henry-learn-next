module.exports = {
  images: {
    loader: 'imgix',
    domains: ['images.prismic.io'],
    path: ''
  },
  async redirects() {
    return [
      {
        source: '/works/1',
        destination: '/works',
        permanent: true
      }
    ];
  }
};
