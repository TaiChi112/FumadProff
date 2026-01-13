import { blogsSource, source } from '@/lib/source';
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

export default async function Page(props: PageProps<'/blogs/[[...slug]]'>) {
    const params = await props.params;
    const page = blogsSource.getPage(params.slug);
    if (!page) notFound();

    // const pageData = page.data as unknown as { body: React.ComponentType; toc: ReturnType<typeof getTableOfContents>; full?: boolean };
    // const MDXContent = pageData.body;
    // const toc = await pageData.toc;

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
    return blogsSource.generateParams();
}

export async function generateMetadata(
    props: PageProps<'/blogs/[[...slug]]'>,
): Promise<Metadata> {
    const params = await props.params;
    const page = blogsSource.getPage(params.slug);
    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
    };
}