/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/admin/dashboard",
        has: [{ type: "host", value: "admin.sunnysidecountrystore.com" }],
      },
    ];
  },
};

module.exports = nextConfig;
