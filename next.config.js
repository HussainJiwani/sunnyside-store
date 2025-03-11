/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/admin/dashboard",
        has: [{ type: "host", value: "admin.yourdomain.com" }],
      },
    ];
  },
};

module.exports = nextConfig;
