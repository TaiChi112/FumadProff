import { projectsSource } from '@/lib/source';
import {
    DocsBody,
    DocsDescription,
    DocsPage,
    DocsTitle,
} from 'fumadocs-ui/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { TableOfContents } from 'fumadocs-core/server';

export default async function Page(props: PageProps<'/projects/[[...slug]]'>) {
    const params = await props.params;
    const page = projectsSource.getPage(params.slug);
    if (!page) notFound();

    const MDXContent = (page.data as { body: React.ComponentType; toc: TableOfContents; full?: boolean }).body;

    return (
        <DocsPage toc={(page.data as { body: React.ComponentType; toc: TableOfContents; full?: boolean }).toc} full={(page.data as { body: React.ComponentType; toc: TableOfContents; full?: boolean }).full}>
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <MDXContent />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return projectsSource.generateParams();
}

export async function generateMetadata(
    props: PageProps<'/projects/[[...slug]]'>,
): Promise<Metadata> {
    const params = await props.params;
    const page = projectsSource.getPage(params.slug);
    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
    };
}