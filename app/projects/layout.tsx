import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { projectsSource } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/projects'>) {
  return (
    <DocsLayout 
      tree={projectsSource.pageTree} 
      {...baseOptions()}
      nav={{ ...baseOptions().nav, enabled: true }}
    >
      {children}
    </DocsLayout>
  );
}
