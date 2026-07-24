import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const sharedConfig = {
  reactStrictMode: true,
  devIndicators: false,
};

export default function nextConfig(phase) {
  return {
    ...sharedConfig,
    // Keep development and production manifests isolated from each other.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  };
}
