const PROXY_CONFIG = [{
  context: [
       "/**",
       "/users/*",
  ],
  target: "http://http://localhost:3000",
  secure: false,
  changeOrigin: true
}]
module.exports = PROXY_CONFIG;
