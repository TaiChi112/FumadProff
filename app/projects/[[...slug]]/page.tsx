import { projectsSource, source } from '@/lib/source';
import {
    DocsBody,
    DocsDescription,
    DocsPage,
    DocsTitle,
} from 'fumadocs-ui/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';

export default async function Page(props: PageProps<'/projects/[[...slug]]'>) {
    const params = await props.params;
    const page = projectsSource.getPage(params.slug);
    if (!page) notFound();

    // const MDXContent = (page.data as { body: React.ComponentType; toc: TableOfContents; full?: boolean }).body;

    return (
        <DocsPage toc={page.data.toc} full={page.data.full}>
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <page.data.body
                    components={getMDXComponents({
                        // this allows you to link to other pages with relative file paths
                        a: createRelativeLink(source, page),
                    })}
                />
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