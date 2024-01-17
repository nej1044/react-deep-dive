import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: `.env`,
});

const config: GatsbyConfig = {
  pathPrefix: '/react-deep-dive',
  siteMetadata: {
    title: `모던 리액트 Deep Dive`,
    siteUrl: `https://nej1044.github.io`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-mdx',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '@docs',
        path: './src/docs/',
      },
      __key: 'docs',
    },
  ],
};

export default config;
