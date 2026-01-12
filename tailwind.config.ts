import type { Config } from 'tailwindcss';
// import plugin from 'tailwindcss/plugin';
// import { createPreset } from 'fumadocs-ui/tailwind-plugin';

export default {
//   presets: [createPreset()],
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
//   theme: {
//     extend: {
//       // เพิ่มส่วนนี้เข้าไปครับ เพื่อให้รู้จักสี fd-primary และอื่นๆ
//       colors: {
//         fd: {
//           background: 'hsl(var(--background) / <alpha-value>)',
//           foreground: 'hsl(var(--foreground) / <alpha-value>)',
//           muted: {
//             DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
//             foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
//           },
//           popover: {
//             DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
//             foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
//           },
//           card: {
//             DEFAULT: 'hsl(var(--card) / <alpha-value>)',
//             foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
//           },
//           primary: {
//             DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
//             foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
//           },
//           secondary: {
//             DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
//             foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
//           },
//           accent: {
//             DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
//             foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
//           },
//           destructive: {
//             DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
//             foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
//           },
//           border: 'hsl(var(--border) / <alpha-value>)',
//           input: 'hsl(var(--input) / <alpha-value>)',
//           ring: 'hsl(var(--ring) / <alpha-value>)',
//           'diff-remove': 'rgb(254, 202, 202)',
//           'diff-add': 'rgb(187, 247, 208)',
//           'diff-remove-symbol': 'rgb(220, 38, 38)',
//           'diff-add-symbol': 'rgb(22, 163, 74)',
//         },
//       },
//     },
//   },
//   plugins: [
//     plugin(function({ addUtilities }) {
//       addUtilities({
//         '.bg-fd-diff-remove': {
//           'background-color': 'rgb(254, 202, 202)',
//         },
//         '.bg-fd-diff-add': {
//           'background-color': 'rgb(187, 247, 208)',
//         },
//         '.text-fd-diff-remove-symbol': {
//           'color': 'rgb(220, 38, 38)',
//         },
//         '.text-fd-diff-add-symbol': {
//           'color': 'rgb(22, 163, 74)',
//         },
//       });
//     }),
//   ],
} satisfies Config;