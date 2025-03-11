/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin/dashboard",
        has: [{ type: "host", value: "admin.sunnysidecountrystore.com" }],
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

