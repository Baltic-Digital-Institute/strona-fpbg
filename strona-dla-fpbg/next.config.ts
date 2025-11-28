import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Wymuszamy katalog projektu jako root, aby uniknąć ostrzeżeń o wielu lockfile'ach
    root: __dirname,
  },
};

export default nextConfig;
