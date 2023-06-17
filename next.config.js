/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./base.scss";`,
  },
  // images: {
  //   formats: ["image/webp"],
  // },

  // experimental: {
  //   forceSwcTransforms: true,
  // },
  // images: {
  //   loader: "custom",
  //   loaderFile: "./public/logo.png",
  // },

  //   images: {
  //     remotePatterns: [
  //       {
  //         protocol: "https",
  //         hostname: "res.cloudinary.com",
  //       },
  //     ],
  //   },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "img.ltwebstatic.com",
  //       port: "http://localhost:3000/",
  //       pathname: "/data/home.jsx",
  //     },
  //   ],
  // },
  //
};

module.exports = nextConfig;
