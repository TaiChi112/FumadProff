import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.pageTree} 
      {...baseOptions()}
      nav={
        { 
          // title: 'Documentation',
          ...baseOptions().nav, enabled: true 
        }
      }
      sidebar={{ enabled: true }}
    >
        {children}
    </DocsLayout>
  );
}
