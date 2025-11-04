import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, Cuboid, FolderKanban } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl:"https://github.com/TaiChi112",
    nav: {
      title: (
        <>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <circle cx={12} cy={12} r={12} fill="currentColor" />
          </svg>
          TaiChi112
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        icon: <BookIcon />,
        text: 'Docs',
        url: '/docs',
        secondary: true
      },
      {
        icon: <Cuboid />,
        text: 'Blogs',
        url: '/blogs',
        secondary: true
      },
      {
        icon: <FolderKanban />,
        text: 'Projects',
        url: '/projects',
        secondary: true
      },
    ],
  };
}
