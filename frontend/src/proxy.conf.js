const proxyConfig = [
  {
    context: '/api',
    target: 'http://localhost:3000', // our rails backend
    secure: false,
    changeOrigin: true
  }
];

module.exports = proxyConfig;
