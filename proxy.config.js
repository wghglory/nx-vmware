const { npm_package_config_port: PORT = 4200 } = process.env;

const PROXY_CONFIG = {
  '/api/github': {
    target: 'https://api.github.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api/github': '',
    },
  },

  '/api-mock/': {
    target: `http://localhost:${~~PORT + 10}`,
    changeOrigin: true,
    secure: false,
  },

  // api json-server
  '/api/v1/': {
    // target: `https://10.139.113.213:56443/`, // CEPH
    // target: `https://10.139.113.95:58443`, // Cloudian
    // target: `https://oss-vcd.eng.vmware.com:59443`, // ECS
    // target: `https://oss-vcd.eng.vmware.com:55443/`, // Cloudian 101
    // target: `https://ose1.eng.vmware.com`, // us-south-1
    // target: `https://oss-vcd.eng.vmware.com:17000`, // OSIS, administrator@system:ca$hc0w
    target: `http://localhost:3000`,
    // target: `https://oss-vcd.eng.vmware.com:58443/`,
    // target: `http://127.0.0.1:4523/mock/359230`, // apifox
    changeOrigin: true,
    secure: false,
  },
};

module.exports = PROXY_CONFIG;
