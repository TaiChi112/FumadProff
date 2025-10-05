import { docsCollection, projectsCollection, blogsCollection } from '@/.source';
import { loader } from 'fumadocs-core/source';

// Source for documentation pages
export const source = loader({
  baseUrl: '/docs',
  source: docsCollection.toFumadocsSource(),
});

// Source for project pages
export const projectsSource = loader({
  baseUrl: '/projects',
  source: projectsCollection.toFumadocsSource(),
});

// Source for blog pages
export const blogsSource = loader({
  baseUrl: '/blogs',
  source: blogsCollection.toFumadocsSource(),
});