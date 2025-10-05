import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { remarkMdxMermaid, remarkMdxFiles, remarkAdmonition } from 'fumadocs-core/mdx-plugins';

// Define docs collection (content/docs)
export const docsCollection = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

// Define projects collection (content/projects)
export const projectsCollection = defineDocs({
  dir: 'content/projects',
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

// Define blogs collection (content/blogs)
export const blogsCollection = defineDocs({
  dir: 'content/blogs',
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid, remarkMdxFiles, remarkAdmonition],
  },
});
