import { docsCollection, projectsCollection, blogsCollection } from '@/.source';
// import { allDocs, allMetas } from 'content-collections';
import { loader } from 'fumadocs-core/source';
// import { createMDXSource } from '@fumadocs/content-collections';

// Source for documentation pages
export const source = loader({
  baseUrl: '/docs',
  source: docsCollection.toFumadocsSource(),
  // source: createMDXSource(allDocs, allMetas),
});

// Source for project pages
export const projectsSource = loader({
  baseUrl: '/projects',
  source: projectsCollection.toFumadocsSource(),
  // source: createMDXSource(allDocs, allMetas),
});

// Source for blog pages
export const blogsSource = loader({
  baseUrl: '/blogs',
  source: blogsCollection.toFumadocsSource(),
  // source: createMDXSource(allDocs, allMetas),
});

// import { allDocs, allMetas } from 'content-collections';
// import { loader } from 'fumadocs-core/source';
// import { createMDXSource } from '@fumadocs/content-collections';

// export const source = loader({
//   baseUrl: '/docs',
//   source: createMDXSource(allDocs, allMetas),
// });
