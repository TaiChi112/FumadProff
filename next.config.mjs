import { createMDX } from 'fumadocs-mdx/next';

/**
 * MDX configuration object with rehype code options enabled.
 * Used to configure the Next.js MDX plugin with specified rehype settings.
 * 
 * @type {Function}
 * @description Configures MDX processing for Next.js, enabling rehype code syntax highlighting
 * while disabling Shiki to prevent conflicts with math language syntax.
 * @example
 * // Use in next.config.mjs
 * export default withMDX(nextConfig);
 */
const withMDX = createMDX({
  mdxOptions: {
    rehypeCodeOptions: true, // Disable Shiki to prevent math lang conflicts
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
