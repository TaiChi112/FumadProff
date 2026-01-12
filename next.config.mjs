import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX({
  mdxOptions: {
    rehypeCodeOptions: false, // Disable Shiki to prevent math lang conflicts
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
